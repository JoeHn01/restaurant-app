import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
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
const dishes = [
    {
        id: 1,
        name: "Shawerma Platter",
        price: 14.99,
        ingredients: "Marinated chicken or lamb, hummus, baba ghanoush, rice, pita bread, salad",
        calories: 600,
        description: "A feast of grilled meats, savory dips, fluffy rice, and fresh salad."
    },
    {
        id: 2,
        name: "Man'oushe Za'atar",
        price: 7.99,
        ingredients: "Flatbread, olive oil, za'atar spice blend, sesame seeds",
        calories: 300,
        description: "Simple yet flavorful flatbread topped with aromatic za'atar and olive oil."
    }
];
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        dishes: () => dishes,
    },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
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
