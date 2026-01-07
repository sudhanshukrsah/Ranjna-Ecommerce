import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
      index: true,
    },

    description: {
      type: String,
    },

    discountType: {
      type: String,
      enum: ["PERCENTAGE", "FIXED", "FREE_SHIPPING"],
      required: true,
    },

    discountValue: {
      type: Number,
      required: function () {
        return this.discountType !== "FREE_SHIPPING";
      },
    },

    maxDiscountAmount: {
      type: Number,
    },

    minimumOrderAmount: {
      type: Number,
      default: 0,
    },

    totalUsageLimit: {
      type: Number,
    },

    perUserLimit: {
      type: Number,
    },

    usedCount: {
      type: Number,
      default: 0,
    },

    applicableCategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],

    applicableProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    validFrom: {
      type: Date,
      required: true,
      index: true,
    },

    validUntil: {
      type: Date,
      required: true,
      index: true,
    },

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },

    isFirstOrderOnly: {
      type: Boolean,
      default: false,
    },

    metadata: {
      type: Map,
      of: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Coupon = mongoose.model("Coupon", couponSchema);
export default Coupon;
