import { z } from "zod";

export const createFacultySchema = z.strictObject({
    name: z
        .string()
        .trim()
        .min(2, "Faculty name must contain at least 2 characters")
        .max(150, "Faculty name cannot exceed 150 characters"),

    code: z
        .string()
        .trim()
        .min(2, "Faculty code must contain at least 2 characters")
        .max(30, "Faculty code cannot exceed 30 characters"),
});

export const updateFacultySchema = createFacultySchema
    .partial()
    .refine(
        (data) => Object.values(data).some(
            (value) => value !== undefined
        ),
        {
            message: "At least one field must be provided",
        }
    );