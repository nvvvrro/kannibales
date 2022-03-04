import mongoose from "mongoose";
import type { MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI!;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// @ts-ignore
let cached = global.mongoose;

if (!cached) {
  // @ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}

export const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection.db;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false,
      } as MongoClientOptions)
      .then(() => {
        console.log("Connected to MongoDB successfully 🚀");
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};
