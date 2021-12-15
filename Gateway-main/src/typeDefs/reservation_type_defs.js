const { gql } = require('apollo-server');

const reservationTypeDefs = gql`
    type Reserva {
        username:String!
        reserUsurious:String!
        reserHabitation:String!
        fetchIngress:String!
        fetchSaida:String!
    }
       

     type Query {
        reservations: [Reserva]
        ReservationByUsername(username: String!): Reserva
    }

    type Mutation {
        newReserva(
        username:String!
        reserUsurious:String!
        reserHabitation:String!
        fetchIngress:String!
        fetchSaida:String!
        ): Reserva

    

        updateReserva(
        username:String!
        reserUsurious:String!
        reserHabitation:String!
        fetchIngress:String!
        fetchSaida:String!
        ): Reserva

        DeleteReserva(
          username:String!
        ): String!
        
    }
`;

module.exports = reservationTypeDefs;

