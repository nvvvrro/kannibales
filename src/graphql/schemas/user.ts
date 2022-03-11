import { gql } from "apollo-server-micro";

export default gql`
  #Users
  type User {
    id: ID
    name: String
    email: String
    password: String
    role: String
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
    role: String!
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    newUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
    deleteUser(id: ID!): String
  }
`;
