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

const resolvers = {
    Query: {
      dishes: async () => {
        // Connect to MongoDB and retrieve dishes
        const client = await MongoClient.connect(uri);
        const db = client.db("restaurant-app-db"); // Replace with your database name
        const dishesCollection = db.collection("dishes");
        const dishesData = await dishesCollection.find().toArray(); // Fetch all dishes

        // Close the connection
        await client.close();

        return dishesData;
      },
    },
};

export { typeDefs, resolvers };