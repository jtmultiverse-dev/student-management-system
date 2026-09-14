import { z } from "zod";

export const facultySchema = z.object({
  name: z
    .string()
    .min(2, "Faculty name must contain at least 2 characters"),

  code: z
    .string()
    .min(2, "Faculty code must contain at least 2 characters")
    .max(10, "Faculty code must contain no more than 10 characters"),
});