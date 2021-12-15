const authResolver = require('./auth_resolver')
const roomResolver = require('./room_resolver')
const reservaResolver = require('./reserva_resolver')
const lodash = require('lodash');
const resolvers = lodash.merge(authResolver, roomResolver, reservaResolver);
module.exports = resolvers;