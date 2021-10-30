const { ApolloServer, gql } = require('apollo-server');

//#################### mocked #######################
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
    Query: {
      books: () => books,
    },
  };

  //####################################################################

const server = new ApolloServer({typeDefs, resolvers});
server.listen(port=5000).then(({url}) => {
    console.log(`Server running at ${url}`);
});