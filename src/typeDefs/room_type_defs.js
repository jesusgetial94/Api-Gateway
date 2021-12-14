const { gql } = require('apollo-server');
//const {BigInt} = require('apollo-type-bigint')
const roomTypeDefs = gql `

    input RoomInput {
        codigo: String!
        descripcion: String!
        disponibilidad: Boolean!
        precio: Int!
    }

    type Room {
        codigo: String!
        descripcion: String!
        disponibilidad: Boolean!
        precio: Int!
    }
    input RoomOnDelete {
        codigo: String
        descripcion: String
        disponibilidad: Boolean
        precio: Int
    }
    type RoomOnDetail {
        id: Int!
        codigo: String!
        descripcion: String!
        disponibilidad: String!
        precio: String!
    }
    type Response{
        detail: String!
    }
    type Mutation {
        roomCreate(userInput :RoomInput, userId: Int!): Room!       
        roomDelete(userId: Int!, roomId: Int!): Response!
        roomUpdate(userId: Int!, roomId: Int!, roomData: RoomOnDelete!): Response!
    }
    type Query {
        roomAllDetail(userId: Int!): [RoomOnDetail]
        roomById(roomId: Int!): Room!
    }
`;
module.exports = roomTypeDefs;