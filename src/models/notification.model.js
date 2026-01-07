import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },

    type: {
      type: String,
      enum: [
        "ORDER_CREATED",
        "ORDER_SHIPPED",
        "ORDER_DELIVERED",
        "PAYMENT_SUCCESS",
        "PAYMENT_FAILED",
        "LOW_STOCK",
        "REFUND_INITIATED",
        "SYSTEM_ALERT",
      ],
      required: true,
      index: true,
    },

    channel: {
      type: String,
      enum: ["EMAIL", "SMS", "PUSH", "IN_APP"],
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    metadata: {
      type: Object,
    },

    isRead: {
      type: Boolean,
      default: false,
      index: true,
    },

    deliveryStatus: {
      type: String,
      enum: ["PENDING", "SENT", "FAILED"],
      default: "PENDING",
    },

    error: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Notification = mongoose.model("Notification", notificationSchema);
export default Notification;
