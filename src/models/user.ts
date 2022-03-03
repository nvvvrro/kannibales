import mongoose, { Schema } from "mongoose";
import uniqueValidatoe from "mongoose-unique-validator";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    emailVerified: String,
    phone: {
      type: String,
      required: true,
      minlength: 8,
    },
    address: {
      type: String,
      required: true,
      minlength: 5,
    },
    city: {
      type: String,
      required: true,
      minlength: 3,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidatoe);

export default mongoose.model("User", userSchema);
