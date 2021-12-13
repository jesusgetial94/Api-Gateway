const authResolver = require('./auth_resolver')
const lodash = require('lodash');
const resolvers = lodash.merge(authResolver);
module.exports = resolvers;