const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    pages: Int
  }

  type Movie {
    title: String
    duration: Int
  }

  union ResultItem = Book | Movie

  type Query {
    items: [ResultItem]
  }
`;

const resolvers = {
    Query: {
        items: () => {
            console.log('Union resolver called');
            return [
                {
                    title: 'Meditations',
                    pages: 350
                },
                {
                    title: 'The Batman',
                    duration: 176
                }
            ];
        }
    },
    ResultItem: {
        __resolveType: (parent) => {
            console.log('Union resolver called');
            if ('duration' in parent) {
                return 'Movie';
            }

            if ('pages' in parent) {
                return 'Book';
            }
        }
    }
  };

const server = new ApolloServer({ typeDefs, resolvers, mockEntireSchema: false });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});