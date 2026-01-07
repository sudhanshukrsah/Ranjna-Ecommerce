import mongoose from "mongoose";

const preferenceSchema = new mongoose.Schema(
  {
    email: {
      type: Boolean,
      default: true,
    },

    sms: {
      type: Boolean,
      default: false,
    },

    push: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

const notificationPreferenceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    orderUpdates: preferenceSchema,
    promotions: preferenceSchema,
    systemAlerts: preferenceSchema,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const NotificationPreference = mongoose.model(
  "NotificationPreference",
  notificationPreferenceSchema
);

export default NotificationPreference;
