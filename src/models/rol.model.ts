import { Schema, model, Document } from "mongoose";

export interface Rol extends Document {
  rolname: string;
}

const rolSchema = new Schema<Rol>(
  {
    rolname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

export const RolModel = model<Rol>("Rol", rolSchema, "roles");
