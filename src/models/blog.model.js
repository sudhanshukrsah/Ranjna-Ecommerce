import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
      index: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    content: {
      type: String,
      required: true,
    },

    excerpt: {
      type: String,
      maxlength: 500,
    },

    featuredImage: {
      type: String,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },


    tags: {
      type: [String],
      index: true,
    },


    publishedAt: {
      type: Date,
      index: true,
    },

    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
    },

    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Text index for search
blogSchema.index({
  title: "text",
  content: "text",
  excerpt: "text",
  tags: "text",
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
