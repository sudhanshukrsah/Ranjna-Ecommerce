import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    variantSku: {
      type: String,
      required: true,
    },

    name: String,

    attributes: {
      size: String,
      color: String,
    },

    price: Number,

    quantity: {
      type: Number,
      default: 1,
      min: 1,
    },

    image: String,
  },
  { _id: false }
);

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },

    guestId: {
      type: String,
      index: true,
    },

    items: [cartItemSchema],

    subtotal: {
      type: Number,
      default: 0,
    },

    discountAmount: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      default: 0,
    },

    couponCode: {
      type: String,
    },

    lastActivityAt: {
      type: Date,
      default: Date.now,
      index: true,
    },

    isAbandoned: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
