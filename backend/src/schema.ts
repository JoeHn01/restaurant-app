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
    category: Category
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
    getUsers: [User]
    getUser(id: ID!): User
    filterUsers(fullname: String, username: String, email: String, role: String): [User]

    getItems: [Item]
    getItem(id: ID!): Item
    filterItems(name: String, description: String, price: Float): [Item]

    getCategories: [Category]
    getCategory(id: ID!): Category
    filterCategories(name: String, description: String): [Category]

    getOrders: [Order]
    getOrder(id: ID!): Order
    filterOrders(type: String, total: Float, status: String): [Order]
  }

  type Mutation {
    createUser(fullname: String!, username: String!, email: String!, role: String!): User!
    updateUser(id: ID!, fullname: String, username: String, email: String, role: String): User!
    deleteUser(id: ID!): User!

    createItem(name: String!, description: String!, price: Float!): Item!
    updateItem(id: ID! name: String, description: String, price: Float): Item!
    deleteItem(id: ID): Item
    
    createCategory(name: String!, description: String): Category!
    updateCategory(id: ID! name: String, description: String): Category!
    deleteCategory(id: ID): Category
    
    createOrder(type: String!, total: Float!, status: String!): Order!
    updateOrder(id: ID! type: String, total: Float, status: String): Order!
    deleteOrder(id: ID): Order
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

async function getDocs<T>(collection: string): Promise<T[]> {
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

async function getDocById<T>(collection: string, id: string): Promise<T> {
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

async function filterDocs<T>(collection: string, filters: { field: string, value: string }[]): Promise<T[]> {
  try {
    const { client, collectionObj } = await connectToDB(collection);
    const filterObject = {};
    filters.forEach(filter => {
      if (filter.value !== undefined) {
        filterObject[filter.field] = filter.value;
      }
    });
    const matchedDocuments = await collectionObj.find(filterObject).toArray();
    await client.close();
    return matchedDocuments;

  } catch (error) {
    console.error(`Error filtering documents for collection ${collection}:`, error);
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
    console.error(`Error updating document in collection ${collection}:`, error);
    throw error;
  }
}

async function deleteDoc<T>(collection: string, id: string): Promise<T | null> {
  try {
    const { client, collectionObj } = await connectToDB(collection);
    const deletedDoc = await collectionObj.findOne({ _id: new ObjectId(id) });
    await collectionObj.deleteOne({ _id: new ObjectId(id) });
    await client.close();
    return deletedDoc

  } catch (error) {
    console.error(`Error deleting document from collection ${collection}:`, error);
    throw error;
  }
}

const resolvers = {
  Query: {
    // dishes: () => getData("dishes"),
    getUsers: () => getDocs("user"),
    getUser: ( _: any, { id } ) => getDocById("user", id),
    filterUsers: ( _: any, filters: any ) => filterDocs("user", [
      { field: "username", value: filters.username },
      { field: "fullname", value: filters.fullname },
      { field: "email", value: filters.email },
      { field: "role", value: filters.role },
    ]),

    getItems: () => getDocs("item"),
    getItem: ( _: any, { id } ) => getDocById("item", id),
    filterItems: ( _: any, filters: any ) => filterDocs("item", [
      { field: "name", value: filters.name },
      { field: "description", value: filters.description },
      { field: "price", value: filters.price },
    ]),

    getCategories: () => getDocs("category"),
    getCategory: ( _: any, { id } ) => getDocById("category", id),
    filterCategories: ( _: any, filters: any ) => filterDocs("category", [
      { field: "name", value: filters.username },
      { field: "description", value: filters.fullname },
    ]),

    getOrders: () => getDocs("order"),
    getOrder: ( _: any, { id } ) => getDocById("order", id),
    filterOrders: ( _: any, filters: any ) => filterDocs("order", [
      { field: "type", value: filters.type },
      { field: "total", value: filters.total },
      { field: "status", value: filters.status },
    ]),
  },

  Mutation: {
    createUser: ( _: any, args: any ) => createDoc("user", args),
    updateUser: ( _: any, { id, ...update } ) => updateDoc("user", id, update),
    deleteUser: ( _: any, { id } ) => deleteDoc("user", id),

    createItem: ( _: any, args: any ) => createDoc("item", args),
    updateItem: ( _: any, { id, ...update } ) => updateDoc("item", id, update),
    deleteItem: ( _: any, { id } ) => deleteDoc("item", id),
    
    createCategory: ( _: any, args: any ) => createDoc("category", args),
    updateCategory: ( _: any, { id, ...update } ) => updateDoc("category", id, update),
    deleteCategory: ( _: any, { id } ) => deleteDoc("category", id),
    
    createOrder: ( _: any, args: any ) => createDoc("order", args),
    updateOrder: ( _: any, { id, ...update } ) => updateDoc("order", id, update),
    deleteOrder: ( _: any, { id } ) => deleteDoc("order", id),
  },
};

export { typeDefs, resolvers };