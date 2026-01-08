import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

/**
 * Hash plain text password
 */
export const hashPassword = async (password) => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * Compare password with hashed value
 */
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
