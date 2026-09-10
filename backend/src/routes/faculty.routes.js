import express from "express";
import { createFacultyController, deleteFacultyController, getFacultiesController, updateFacultyController } from "../controllers/faculty.controller.js";
import { validateBody, validateParams, } from "../middlewares/validate.middleware.js";

import { idParamsSchema } from "../validations/common.validation.js";

import {
    createFacultySchema,
    updateFacultySchema,
} from "../validations/faculty.validation.js";


const router = express.Router();

router.post("/", validateBody(createFacultySchema),createFacultyController);
router.get("/", getFacultiesController);
router.patch("/:id", validateBody(updateFacultySchema), validateParams(idParamsSchema), updateFacultyController);
router.delete("/:id", validateParams(idParamsSchema), deleteFacultyController);

export default router;