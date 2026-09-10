 import prisma from "../config/prisma.js";

 export async function createFaculty(data) {
    const faculty = await prisma.faculty.create({
        data: {
            name: data.name,
            code: data.code,
        },
    });

    return faculty;
 }

 export async function getAllFaculties() {
    const faculties = await prisma.faculty.findMany({
        orderBy: {
            name: "asc",
        },
    });
    return faculties;
 }

export async function updateFaculty(id, data) {
    const updateData = {};

    if (data.name !== undefined) {
        updateData.name = data.name;
    }

    if (data.code !== undefined) {
        updateData.code = data.code;
    }

    const faculty = await prisma.faculty.update({
        where: {
            id,
        },
        data: updateData,
    });

    return faculty;
}

export async function deleteFaculty(id) {
    const faculty = await prisma.faculty.delete({
        where: {
            id,
        },
    });

    return faculty;
}