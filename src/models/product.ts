import mongoose, { Schema } from "mongoose";
import uniqueValidatoe from "mongoose-unique-validator";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  productionCapacity: {
    type: Number,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  createAt: {
    type: Date,
    defalut: Date.now(),
  },
});

productSchema.plugin(uniqueValidatoe);

export default mongoose.model("Product", productSchema);
