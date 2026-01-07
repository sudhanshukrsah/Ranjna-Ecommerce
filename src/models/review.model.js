import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      index: true,
    },

    title: {
      type: String,
      trim: true,
      maxlength: 120,
    },

    comment: {
      type: String,
      trim: true,
      maxlength: 2000,
    },

    images: [
      {
        type: String,
      },
    ],

    isVerifiedPurchase: {
      type: Boolean,
      default: false,
      index: true,
    },

    isApproved: {
      type: Boolean,
      default: false,
      index: true,
    },

    helpfulVotes: {
      type: Number,
      default: 0,
    },

    adminReply: {
      message: String,
      repliedAt: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

reviewSchema.index({ product: 1, user: 1 }, { unique: true });

const Review = mongoose.model("Review", reviewSchema);
export default Review;
