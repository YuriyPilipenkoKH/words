import { z } from "zod";
// const forbiddenNames = process.env.NEXT_PUBLIC_FORBIDDEN_NAMES?.split(',') || [];

export const wordSchema = z.object({

  text: z
  .string()
  .trim()
  .min(1, "Word cannot be empty")
  .max(50, "Word cannot exceed 50 characters")
})
export type wordSchemaType = z.infer<typeof wordSchema>