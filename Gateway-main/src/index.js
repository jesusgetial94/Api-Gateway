const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const AuthAPI = require('./dataSources/auth_api');
const RoomAPI = require('./dataSources/room_api')
const authentication = require('./utils/authentication');
const ReservaAPI = require('./dataSources/reservation_api')
//mport authentication from "./utils/authentication.js";

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        roomAPI: new RoomAPI(),
        authAPI: new AuthAPI(),
        reservaAPI: new ReservaAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
