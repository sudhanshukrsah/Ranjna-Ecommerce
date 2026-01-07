import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
      index: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },

    gateway: {
      type: String,
      enum: ["RAZORPAY", "STRIPE", "PAYPAL"],
      required: true,
      index: true,
    },

    gatewayOrderId: {
      type: String,
      index: true,
    },

    gatewayPaymentId: {
      type: String,
      index: true,
    },

    gatewaySignature: {
      type: String,
      select: false,
    },

    amount: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "INR",
    },

    status: {
      type: String,
      enum: ["CREATED", "AUTHORIZED", "CAPTURED", "FAILED", "REFUNDED"],
      default: "CREATED",
      index: true,
    },

    refund: {
      refundId: String,
      amount: Number,
      refundedAt: Date,
    },

    rawResponse: {
      type: Object,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
