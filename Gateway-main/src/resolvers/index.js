const authResolver = require('./auth_resolver')
const roomResolver = require('./room_resolver')
const lodash = require('lodash');
const reservationResolver = require('./reservation_resolver')
const resolvers = lodash.merge(authResolver, roomResolver, reservationResolver);
module.exports = resolvers;