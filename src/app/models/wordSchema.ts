import { z } from "zod";


export const wordSchema = z.object({

  text: z
  .string()
  .trim()
  .min(1, "Word cannot be empty")
  .max(50, "Word cannot exceed 50 characters"),
  meaning: z
  .string()
  .trim()
  .min(1, "Meaning cannot be empty")
  .max(100, "Meaning cannot exceed 100 characters"),
  spelling: z
  .string()
  .trim()
  .min(1, "Spelling cannot be empty")
  .max(50, "Spelling cannot exceed 50 characters")
})
export type wordSchemaType = z.infer<typeof wordSchema>