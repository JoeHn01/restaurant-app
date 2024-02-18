import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: 'src/db-credentials.env' });

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_USERNAME}@restaurant-app-database.itrrdlz.mongodb.net/?retryWrites=true&w=majority`

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # scalar DateTime

  # type Dish {
  #   _id: ID!
  #   name: String
  #   price: Float
  #   category: String
  #   ingredients: String
  #   calories: Int
  #   description: String
  # }

  type User {
    _id: ID!
    fullname: String!
    username: String!
    email: String!
    role: String!
  }

  type Item {
    _id: ID!
    name: String!
    description: String!
    price: Float!
    category_id: ID!
  }

  type Category {
    _id: ID!
    name: String!
    description: String
    items: [ID]
  }

  type Order {
    _id: ID!
    type: String!   # (e.g. delivery, pickup, dine-in)
    user_id: ID
    total: Float!
    # time: DateTime!  # need to define scalar type (DateTime)
    status: String!
    order_items: [ID!]
  }

  type OrderItem {
    order_id: ID!
    item_id: ID!
    quantity: Int!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    # dishes: [Dish]
    users: [User]
    user(id: ID!): User

    items: [Item]
    item(id: ID!): Item

    categories: [Category]
    category(id: ID!): Category

    orders: [Order]
    order(id: ID!): Order
  }

  type Mutation {
    createUser(fullname: String!, username: String!, email: String!, role: String!): User!
    updateUser(id: ID!, fullname: String, username: String, email: String, role: String): User!

    createItem(name: String!, description: String!, price: Float!): Item!
    updateItem(id: ID! name: String, description: String, price: Float): Item!
    
    createCategory(name: String!, description: String): Category!
    updateCategory(id: ID! name: String, description: String): Category!
    
    createOrder(type: String!, total: Float!, status: String!): Order!
    updateOrder(id: ID! type: String, total: Float, status: String): Order!
  }
`;

async function connectToDB(collection: string): Promise<{ client: MongoClient; collectionObj: any }> {
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db("restaurant-app-db");
    const collectionObj = db.collection(collection);
    return { client, collectionObj };

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

async function getAll<T>(collection: string): Promise<T[]> {
  try {
    const { client, collectionObj } = await connectToDB(collection);
    const data = await collectionObj.find().toArray();
    await client.close();
    return data;

  } catch (error) {
    console.error(`Error getting documents from collection ${collection}:`, error);
    throw error;
  }
}

async function getById<T>(collection: string, id: string): Promise<T> {
  try {
    const { client, collectionObj } = await connectToDB(collection);
    const data = await collectionObj.findOne({ _id: new ObjectId(id) });
    await client.close();
    return data;

  } catch (error) {
    console.error(`Error getting document from collection ${collection}:`, error);
    throw error;
  }
}

async function createDoc<T>(collection: string, input: any): Promise<T> {
  try {
    const { client, collectionObj } = await connectToDB(collection);
    const result = await collectionObj.insertOne(input);
    const addedDoc = await collectionObj.findOne({ _id: result.insertedId });
    await client.close();
    return addedDoc;

  } catch (error) {
    console.error(`Error adding document to collection ${collection}:`, error);
    throw error;
  }
}

async function updateDoc<T>(collection: string, id: string, update: any): Promise<T> {
  try {
    const { client, collectionObj } = await connectToDB(collection);
    await collectionObj.updateOne({ _id: new ObjectId(id) }, { $set: update });
    const updatedDoc = await collectionObj.findOne({ _id: new ObjectId(id) });
    await client.close();
    return updatedDoc;

  } catch (error) {
    console.error(`Error in updateDoc for collection ${collection} and ID ${id}:`, error);
    throw error;
  }
}

const resolvers = {
  Query: {
    // dishes: () => getData("dishes"),
    users: () => getAll("user"),
    user: (_: any, { id } ) => getById("user", id),

    items: () => getAll("item"),
    item: (_: any, { id } ) => getById("item", id),

    categories: () => getAll("category"),
    category: (_: any, { id } ) => getById("category", id),

    orders: () => getAll("order"),
    order: (_: any, { id } ) => getById("order", id),
  },

  Mutation: {
    createUser: (_: any, args: any) => createDoc("user", args),
    updateUser: (_: any, { id, ...update }) => updateDoc("user", id, update),

    createItem: (_: any, args: any) => createDoc("item", args),
    updateItem: (_: any, { id, ...update }) => updateDoc("item", id, update),
    
    createCategory: (_: any, args: any) => createDoc("category", args),
    updateCategory: (_: any, { id, ...update }) => updateDoc("category", id, update),
    
    createOrder: (_: any, args: any) => createDoc("order", args),
    updateOrder: (_: any, { id, ...update }) => updateDoc("order", id, update),
  },
};

export { typeDefs, resolvers };