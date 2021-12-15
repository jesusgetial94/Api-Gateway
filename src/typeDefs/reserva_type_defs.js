const { gql } = require('apollo-server');
//const {BigInt} = require('apollo-type-bigint')
const reservaTypeDefs = gql `
    type Reserva {
        username:String!
        reserUsurious:String
        reserHabitation:String
        fetchIngress:String
        fetchSaida:String
    }

    type Query {
        reservationAllDetail: [Reserva]
    }
`;
module.exports = reservaTypeDefs;