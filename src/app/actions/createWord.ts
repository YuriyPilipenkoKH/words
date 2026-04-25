"use server";

import { connectDB } from "../lib/db";
import { wordSchema } from "../models/wordSchema";
import wordModel from "../models/word";


export const createWord = async (formData: FormData) => {
  try {
    await connectDB();

    // Convert FormData → plain object
    const rawData = {
      text: formData.get("text"),
      meaning: formData.get("meaning"),
      spelling: formData.get("spelling"),
    };

    // Validate with Zod
    const parsed = wordSchema.safeParse(rawData);

    if (!parsed.success) {
      return {
        success: false,
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    // Data is now fully typed & safe
    const word = await wordModel.create(parsed.data);

    return {
      success: true,
      data: JSON.parse(JSON.stringify(word)), // avoid serialization issues
    };
  } catch (error) {
    console.error("Create Word Error:", error);

    return {
      success: false,
      error: "Something went wrong",
    };
  }
};