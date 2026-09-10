import { z } from "zod";

export const createStudentSchema = z.strictObject({
    firstName: z
        .string()
        .trim()
        .min(2, "First name must contain at least 2 characters")
        .max(50, "First name cannot exceed 50 characters"),

    lastName: z
        .string()
        .trim()
        .min(2, "Last name must contain at least 2 characters")
        .max(50, "Last name cannot exceed 50 characters"),

    email: z
        .string()
        .trim()
        .email("Invalid email address")
        .max(100, "Email cannot exceed 100 characters")
        .toLowerCase(),

    studentNumber: z
        .string()
        .trim()
        .min(2, "Student number is required")
        .max(30, "Student number cannot exceed 30 characters"),

    course: z
        .coerce
        .number()
        .int("Course must be an integer")
        .min(1, "Course must be at least 1")
        .max(6, "Course cannot exceed 6"),

    phone: z
        .union([
            z.string()
                .trim()
                .min(5, "Phone number is too short")
                .max(30, "Phone number is too long"),
            z.literal(""),
        ])
        .optional(),

    dateOfBirth: z
        .union([
            z.iso.date("Invalid date format"),
            z.literal(""),
        ])
        .optional(),

    facultyId: z
        .coerce
        .number()
        .int("Faculty ID must be an integer")
        .positive("Faculty ID must be positive"),
});

export const updateStudentSchema = createStudentSchema
    .partial()
    .refine(
        (data) => Object.values(data).some(
            (value) => value !== undefined
        ),
        {
            message: "At least one field must be provided",
        }
    );