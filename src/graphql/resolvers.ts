import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";

const resolvers = loadFilesSync(path.join(__dirname, "./resolvers"), {
  extensions: [".resolvers.ts", ".resolvers.js", ".ts", ".js"],
  ignoreIndex: true,
});

export default mergeResolvers(resolvers);
