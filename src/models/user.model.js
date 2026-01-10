import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      sparse: true,
      index: true,
    },

    phone: {
      type: String,
      unique: true,
      sparse: true,
      index: true,
    },

    clerkId: {
      type: String,
      unique: true,
      sparse: true,
      index: true,
    },

    password: {
      type: String,
      minlength: 8,
      select: false,
    },

    role: {
      type: String,
      enum: ["CUSTOMER", "VENDOR", "ADMIN", "SUPER_ADMIN"],
      default: "CUSTOMER",
      index: true,
    },

    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    isPhoneVerified: {
      type: Boolean,
      default: false,
    },

    isBlocked: {
      type: Boolean,
      default: false,
      index: true,
    },

    addresses: [
      {
        label: String,
        addressLine1: String,
        addressLine2: String,
        city: String,
        state: String,
        country: String,
        pincode: String,
        isDefault: Boolean,
      },
    ],

    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    refreshToken: {
      type: String,
      select: false,
    },

    lastLoginAt: Date,

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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
