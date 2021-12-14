const { gql } = require('apollo-server');
//const {BigInt} = require('apollo-type-bigint')
const authTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    input CredentialsInput {
        username: String!
        password: String!
    }
    input SignUpInput {
        username: String!
        password: String!
        name: String!
        identification: String!
        phone: String!
        email:String!
    }
    type UserDetail {
        id: Int!
        username: String!
        name: String!
        identification: String!
        phone: String!
        email:String!
    }
    type Room {
        codigo: String!
        descripcion: String!
        disponibilidad: Boolean!
        precio: Int!
    }
    type Mutation {
        signUpUser(userInput :SignUpInput): Tokens!
        signUpSuperUser(userInput :SignUpInput): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
        
    }

    type Query {
        userDetailById(userId: Int!): UserDetail!
    }
`;
module.exports = authTypeDefs;