import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: 'src/db-credentials.env' });

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xw40vvf.mongodb.net/?retryWrites=true&w=majority`


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql

  type Dish {
    id: Int
    name: String
    price: Float
    ingredients: String
    calories: Int
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
        const db = client.db("restaurant-db"); // Replace with your database name
        const dishesCollection = db.collection("dishes");
        const dishesData = await dishesCollection.find().toArray(); // Fetch all dishes

        // Close the connection
        await client.close();

        return dishesData;
      },
    },
};


const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 5000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);