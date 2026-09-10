import { createFaculty, deleteFaculty, getAllFaculties, updateFaculty, } from "../services/faculty.service.js";

export async function createFacultyController(req, res) {
    try {
        const faculty = await createFaculty(req.body);

        return res.status(201).json({
            message: "Faculty created successfully",
            data: faculty,
        })
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Failed to create faculty",
        });
    }
}

export async function getFacultiesController(req, res) {
    try {
        const faculties = await getAllFaculties();

        return res.status(200).json({
            data: faculties,
        });
    } catch (error) {
         console.error(error);

         return res.status(500).json({
      message: "Failed to get faculties",
    });
    }
    
}

export async function updateFacultyController(req, res) {
    try {
        const { id } = req.validatedParams;

        const faculty = await updateFaculty(id, req.body);

        return res.status(200).json({
            message: "Faculty updated successfully",
            data: faculty,
        })
    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({
                message: "Faculty not found",
            });
        }

        if (error.code === "P2002") {
            return res.status(409).json({
                message: "Faculty code already exists",
            });
        }

        return res.status(500).json({
            message: "Failed to update faculty",
        });
    }
}

export async function deleteFacultyController(req, res) {
    try {
        const { id } = req.validatedParams;

        const faculty = await deleteFaculty(id);
       
               return res.status(200).json({
                   message: "Faculty deleted successfully",
               });
           } catch (error) {
    console.error(error);

    if (error.code === "P2025") {
        return res.status(404).json({
            message: "Faculty not found",
        });
    }

    if (error.code === "P2003") {
        return res.status(409).json({
            message: "Cannot delete faculty because it has students",
        });
    }

    return res.status(500).json({
        message: "Failed to delete faculty",
    });
}
}