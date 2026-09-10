import { z } from "zod";

export function validateBody(schema) {
    return function (req, res, next) {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            return res.status(422).json({
                message: "Validation failed",
                errors: z.flattenError(result.error),
            });
        }

        req.body = result.data;

        next();
    };
}

export function validateParams(schema) {
    return function (req, res, next) {
        const result = schema.safeParse(req.params);

        if (!result.success) {
            return res.status(400).json({
                message: "Invalid URL parameters",
                errors: z.flattenError(result.error),
            });
        }

        req.validatedParams = result.data;

        next();
    };
}