import express from "express"

import { createStudentController, getStudentByIdController, getStudentsController, updateStudentController, deleteStudentController } from "../controllers/student.controller.js"
import { validateBody, validateParams, } from "../middlewares/validate.middleware.js";
import { createStudentSchema, updateStudentSchema, } from "../validations/student.validation.js";
import { idParamsSchema } from "../validations/common.validation.js";

const router = express.Router();

router.post("/", validateBody(createStudentSchema), createStudentController);
router.get("/", getStudentsController);
router.get("/:id", validateParams(idParamsSchema), getStudentByIdController);
router.patch("/:id", validateBody(updateStudentSchema), validateParams(idParamsSchema), updateStudentController);
router.delete("/:id", validateParams(idParamsSchema), deleteStudentController);

export default router;