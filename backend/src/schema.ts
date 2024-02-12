import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: 'src/db-credentials.env' });

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_USERNAME}@restaurant-app-database.itrrdlz.mongodb.net/?retryWrites=true&w=majority`

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql

  type Dish {
    _id: ID!
    name: String
    price: Float
    category: String
    ingredients: String
    calories: Int
    description: String
  }

  type Category {
    _id: ID!
    name: String
    description: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    dishes: [Dish]
  }
`;

async function connectToDB(collection) {

  try {
    // Connect to the MongoDB server
    const client = await MongoClient.connect(uri);

    // Get the database
    const db = client.db("restaurant-app-db");

    // Access the specified collection
    const collectionObj = db.collection(collection);

    // Fetch all documents from the collection
    const data = await collectionObj.find().toArray();

    // Close the connection
    await client.close();

    return data;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Re-throw the error for handling in the calling code
  }

}

const resolvers = {
    Query: {
      dishes: () => connectToDB("dishes"),
    },
};

export { typeDefs, resolvers };