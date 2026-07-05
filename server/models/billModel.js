import mongoose from "mongoose";

const billSchema = new mongoose.Schema(
  {
    billNumber: {
      type: String,
      required: true,
      unique: true,
    },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },

   products: [
  {
    name: {
      type: String,
      required: true,
    },

    qty: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },
  },
],

    productTotal: {
      type: Number,
      required: true,
    },

    serviceCharge: {
      type: Number,
      default: 0,
    },

    grandTotal: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
billSchema.index({ customer: 1 });

const Bill = mongoose.model("Bill", billSchema);

export default Bill;