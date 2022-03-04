import mongoose from "mongoose";
import type { MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI!;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
export const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection.db;
  }

  await mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    } as MongoClientOptions)
    .then(() => {
      console.log("Connected to MongoDB successfully 🚀");
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};
