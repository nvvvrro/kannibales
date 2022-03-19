import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { gql } from "apollo-server-micro";

const dummyType = gql`
  type Query {
    hello: String
  }
`;

//merge all typeDefs
const typeDefs = mergeTypeDefs([
  dummyType,
  ...loadFilesSync(path.join(__dirname, "./schemas"), {
    extensions: [".graphql", ".ts", ".js"],
    ignoreIndex: true,
  }),
]);

export default typeDefs;
