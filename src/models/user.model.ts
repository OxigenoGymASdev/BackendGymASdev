import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface User extends Document {
  username: string;
  dni: number;
  password: string;
  role: number;
}

const userSchema = new Schema<User>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    dni: {
      type: Number,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    role: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

export const UserModel = model<User>("User", userSchema, "usuarios");
