const authTypeDefs = require('./auth_type_defs');
const roomTypeDefs = require('./room_type_defs')
const reservationTypeDefs = require('./reservation_type_defs')
//Se unen
const schemasArrays = [authTypeDefs, roomTypeDefs, reservationTypeDefs];
//Se exportan
module.exports = schemasArrays;