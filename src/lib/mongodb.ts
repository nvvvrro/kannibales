import { MongoClient } from "mongodb";
import type { MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI as string;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
} as MongoClientOptions;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  let globalMongoClientPromise = global as typeof globalThis & {
    _mongoClientPromise: Promise<MongoClient>;
  };

  if (!globalMongoClientPromise._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalMongoClientPromise._mongoClientPromise = client.connect();
  }
  clientPromise = globalMongoClientPromise._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
