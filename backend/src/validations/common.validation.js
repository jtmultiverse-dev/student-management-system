import { z } from "zod";

export const idParamsSchema = z.strictObject({
    id: z
        .coerce
        .number()
        .int("ID must be an integer")
        .positive("ID must be positive"),
});