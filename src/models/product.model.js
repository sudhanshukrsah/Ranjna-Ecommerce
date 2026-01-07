import mongoose from "mongoose";

const variantSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    attributes: {
      size: String,
      color: String,
    },

    price: {
      type: Number,
      required: true,
    },

    discountedPrice: {
      type: Number,
    },

    stock: {
      type: Number,
      default: 0,
    },

    barcode: String,

    images: [
      {
        url: String,
        isPrimary: Boolean,
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: "text",
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    description: {
      type: String,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      index: true,
    },

    tags: {
      type: [String],
      index: true,
    },

    variants: [variantSchema],

    brand: {
      type: String,
      index: true,
    },

    averageRating: {
      type: Number,
      default: 0,
      index: true,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["IN_STOCK", "OUT_OF_STOCK", "PRE_ORDER"],
      default: "IN_STOCK",
      index: true,
    },

    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },

    isDeleted: {
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

productSchema.index({
  name: "text",
  description: "text",
  brand: "text",
  tags: "text",
});

const Product = mongoose.model("Product", productSchema);
export default Product;
