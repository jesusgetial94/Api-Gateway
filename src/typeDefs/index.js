const authTypeDefs = require('./auth_type_defs');
const roomTypeDefs = require('./room_type_defs')
const reservaTypeDefs = require('./reserva_type_defs')
//Se unen
const schemasArrays = [authTypeDefs, roomTypeDefs, reservaTypeDefs];
//Se exportan
module.exports = schemasArrays;