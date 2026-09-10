import prisma from "../config/prisma.js";

export async function createStudent(data) {
    const student = await prisma.student.create({
        data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            studentNumber: data.studentNumber,
            course: data.course,
            phone: data.phone,
            dateOfBirth: data.dateOfBirth
                ? new Date(data.dateOfBirth)
                : null,
            facultyId: data.facultyId,
        },
    });
    return student;
}

export async function getAllStudents() {
    const students = await prisma.student.findMany({
        include: {
            faculty: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return students;
}

export async function getStudentById(id) {
    const student = await prisma.student.findUnique({
        where: {
            id,
        },
        include: {
            faculty: true,
        }
    });
    return student;
}

export async function updateStudent(id, data) {
    const updateData = {};

    const allowedFields = [
        "firstName",
        "lastName",
        "email",
        "studentNumber",
        "course",
        "phone",
        "dateOfBirth",
        "facultyId",
    ];

    // განახლებისთვის ვიღებთ მხოლოდ გამოგზავნილ ველებს.
    for (const field of allowedFields) {
        if (data[field] !== undefined) {
            updateData[field] = data[field];
        }
    }

    if (updateData.phone === "") {
        updateData.phone = null;
    }

    if (updateData.dateOfBirth !== undefined) {
        updateData.dateOfBirth = updateData.dateOfBirth
            ? new Date(updateData.dateOfBirth)
            : null;
    }

    const student = await prisma.student.update({
        where: {
            id,
        },
        data: updateData,
        include: {
            faculty: true,
        },
    });

    return student;
}

export async function deleteStudent(id) {
    const student = await prisma.student.delete({
        where: {
            id,
        },

        include: {
            faculty: true,
        },
    });

    return student;
}