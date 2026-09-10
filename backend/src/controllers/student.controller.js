import { createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent } from "../services/student.service.js"

export async function createStudentController(req, res) {
    try {
        const student = await createStudent(req.body);

        return res.status(201).json({
            message: "Student created successfully",
            data: student,
        })
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to create student",
        });
    }
}

export async function getStudentsController(req, res) {
    try {
        const students = await getAllStudents();

        return res.status(200).json({
            data: students,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to get students",
        });
    }
}

export async function getStudentByIdController(req, res) {
    try {
        const { id } = req.validatedParams;
        const student = await getStudentById(id)
        return res.status(200).json({
            data: student,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "failed to get student by id"
        });
    }
}

export async function updateStudentController(req, res) {
    try {
        const { id } = req.validatedParams;

        const student = await updateStudent(id, req.body);

        return res.status(200).json({
            message: "Student updated successfully",
            data: student,
        });
    } catch (error) {
        console.error(error);

        if (error.code === "P2025") {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        return res.status(500).json({
            message: "Failed to update student",
        });
    }
}

export async function deleteStudentController(req, res) {
    try {
        const { id } = req.validatedParams;

        const student = await deleteStudent(id);

        return res.status(200).json({
            message: "Student deleted successfully",
        });
    } catch (error) {
        console.error(error);

        if (error.code === "P2025") {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        if (error.code === "P2003") {
            return res.status(409).json({
                message: "Cannot delete faculty because it has students",
            });
        }

        return res.status(500).json({
            message: "Failed to delete student",
        });



    }

}