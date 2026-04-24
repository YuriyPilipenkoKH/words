import mongoose from "mongoose";
import { wordSchemaType } from "./wordSchema";


const WordSchema = new mongoose.Schema<wordSchemaType>(
  {
    text: { type: String, required: true, trim: true, default: "" },
    meaning: { type: String, trim: true, default: "" },
    spelling: { type: String, trim: true, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.Word || mongoose.model("Word", WordSchema);

export type Word = wordSchemaType & {
  _id: string; 
  createdAt: Date;
  updatedAt: Date;
};