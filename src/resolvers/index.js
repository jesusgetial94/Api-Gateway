const authResolver = require('./auth_resolver')
const roomResolver = require('./room_resolver')
const reservationResolver = require('./reservation_resolver')
const lodash = require('lodash');
const resolvers = lodash.merge(authResolver, roomResolver, reservationResolver);
module.exports = resolvers;