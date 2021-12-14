const authResolver = require('./auth_resolver')
const roomResolver = require('./room_resolver')
const lodash = require('lodash');
const resolvers = lodash.merge(authResolver, roomResolver);
module.exports = resolvers;