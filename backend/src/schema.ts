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
  const { client, collectionObj } = await connectToDB(collection);
  const data = await collectionObj.find().toArray();
  await client.close();
  return data;
}

async function getById<T>(collection: string, id: string): Promise<T> {
  const { client, collectionObj } = await connectToDB(collection);
  const data = await collectionObj.findOne({ _id: new ObjectId(id) });
  await client.close();
  return data;
}

const resolvers = {
  Query: {
    // dishes: () => getData("dishes"),
    users: () => getAll("user"),
    user: (_: any, args: any ) => getById("user", args.id),

    items: () => getAll("item"),
    item: (_: any, args: any ) => getById("item", args.id),

    categories: () => getAll("category"),
    category: (_: any, args: any ) => getById("category", args.id),

    orders: () => getAll("order"),
    order: (_: any, args: any ) => getById("order", args.id),
  },
};

export { typeDefs, resolvers };