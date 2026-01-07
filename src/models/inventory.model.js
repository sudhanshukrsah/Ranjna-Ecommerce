import mongoose from "mongoose";

const stockLogSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["IN", "OUT", "ADJUSTMENT", "TRANSFER"],
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    reason: {
      type: String,
    },

    reference: {
      type: String,
    },

    performedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const inventorySchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },

    variantSku: {
      type: String,
      required: true,
      index: true,
    },

    warehouse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Warehouse",
      required: true,
      index: true,
    },

    stock: {
      type: Number,
      default: 0,
    },

    lowStockThreshold: {
      type: Number,
      default: 5,
    },

    logs: [stockLogSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

inventorySchema.index(
  { product: 1, variantSku: 1, warehouse: 1 },
  { unique: true }
);

const Inventory = mongoose.model("Inventory", inventorySchema);
export default Inventory;
