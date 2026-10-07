import { useState } from "react";
import { Alert } from "antd";
import {
    useGetStudentsQuery,
    useGetFacultiesQuery,
    useCreateStudentMutation,
    useUpdateStudentMutation,
    useDeleteStudentMutation
} from "../services/studentsApi.js";
import StudentsList from "../components/StudentsList.jsx";
import StudentForm from "../components/StudentForm.jsx";

import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "../validators/student.schema.js";

import { useForm } from "react-hook-form";

const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    studentNumber: "",
    course: "",
    phone: "",
    dateOfBirth: "",
    facultyId: "",
};

// 404 can also mean "Student not found", so the message must be checked too.
function isFacultyNotFoundError(error) {
    return (
        error?.status === 404 &&
        error?.data?.message === "Faculty not found"
    );
}

function StudentsPage() {
    const {
        data: response,
        isLoading,
        isError,
        error,
    } = useGetStudentsQuery();

const {
    control,
    handleSubmit: handleFormSubmit,
    reset,
    setError,
    watch,
    formState: { errors },
} = useForm({
    resolver: zodResolver(studentSchema),
    defaultValues: initialFormData,
});
    const [editingStudentId, setEditingStudentId] = useState(null);

    const [
        createStudent,
        {
            isLoading: isCreating,
            isSuccess: isCreateSuccess,
            isError: isCreateError,
            error: createError,
        },
    ] = useCreateStudentMutation();

    const [
        updateStudent,
        {
            isLoading: isUpdating,
            isSuccess: isUpdateSuccess,
            isError: isUpdateError,
            error: updateError,
        },
    ] = useUpdateStudentMutation();

    const [
        deleteStudent,
        {
            isLoading: isDeleting,
            isSuccess: isDeleteSuccess,
            isError: isDeleteError,
            error: deleteError,
        },
    ] = useDeleteStudentMutation();


    async function handleStudentSubmit(data) {
        const studentData = {
            ...data,
            course: Number(data.course),
            facultyId: Number(data.facultyId),
        };

        try {
            if (editingStudentId !== null) {
                await updateStudent({
                    id: editingStudentId,
                    data: studentData,
                }).unwrap();

                setEditingStudentId(null);
            } else {
                await createStudent(studentData).unwrap();
            }

            reset(initialFormData);
        } catch (error) {
            console.error("Failed to save student:", error);

            if (isFacultyNotFoundError(error)) {
                setError("facultyId", {
                    type: "server",
                    message: error.data.message,
                });
            }
        }
    }

    function handleEdit(student) {
        setEditingStudentId(student.id);

        reset({
            firstName: student.firstName ?? "",
            lastName: student.lastName ?? "",
            email: student.email ?? "",
            studentNumber: student.studentNumber ?? "",
            course: String(student.course ?? ""),
            phone: student.phone ?? "",
            dateOfBirth: student.dateOfBirth
                ? student.dateOfBirth.slice(0, 10)
                : "",
            facultyId: String(student.facultyId ?? ""),
        });
    }

    function handleCancelEdit() {
        setEditingStudentId(null);
        reset(initialFormData);
    }

    async function handleDelete(student) {
        const confirmed = window.confirm(
            `ნამდვილად გსურთ წაშალოთ ${student.firstName} ${student.lastName}?`
        );

        if (!confirmed) {
            return;
        }

        try {
            await deleteStudent(student.id).unwrap();

            if (editingStudentId === student.id) {
                handleCancelEdit();
            }
        } catch (error) {
            console.error("სტუდენტის წაშლა ვერ შესრულდა", error);
        }
    }

    const {
        data: facultiesResponse,
        isLoading: isFacultiesLoading,
        isError: isFacultiesError,
        error: facultiesError,
    } = useGetFacultiesQuery();

    if (isLoading) {
        return <p>Loading students...</p>;
    }

    if (isError) {
        return (
            <Alert
                type="error"
                message={
                    error?.data?.message ??
                    "Failed to load students"
                }
                showIcon
            />
        );
    }

    const students = response?.data ?? [];
    const faculties = facultiesResponse?.data ?? [];
    const isEditing = editingStudentId !== null;
    const isSaving = isEditing ? isUpdating : isCreating;

    return (
        <main>
            <h1>Students</h1>

            <StudentForm
                control={control}
                errors={errors}
                faculties={faculties}
                isEditing={isEditing}
                isSaving={isSaving}
                isFacultiesLoading={isFacultiesLoading}
                onSubmit={handleFormSubmit(handleStudentSubmit)}
                onCancelEdit={handleCancelEdit}
            />

            {isFacultiesError && (
                <Alert
                    type="error"
                    message={
                        facultiesError?.data?.message ??
                        "Failed to load faculties"
                    }
                    showIcon
                    style={{ marginBottom: 24 }}
                />
            )}

            {isCreateSuccess && (
                <p>Student created successfully.</p>
            )}

            {isCreateError && !isFacultyNotFoundError(createError) && (
                <Alert
                    type="error"
                    message={
                        createError?.data?.message ??
                        "Failed to create student"
                    }
                    showIcon
                    style={{ marginBottom: 24 }}
                />
            )}

            {isUpdateSuccess && (
                <p>Student updated successfully.</p>
            )}

            {isUpdateError && !isFacultyNotFoundError(updateError) && (
                <Alert
                    type="error"
                    message={
                        updateError?.data?.message ??
                        "Failed to update student"
                    }
                    showIcon
                    style={{ marginBottom: 24 }}
                />
            )}

            {isDeleteSuccess && (
                <p>Student deleted successfully.</p>
            )}

            {isDeleteError && (
                <Alert
                    type="error"
                    message={
                        deleteError?.data?.message ??
                        "Failed to delete student"
                    }
                    showIcon
                    style={{ marginBottom: 24 }}
                />
            )}

            <StudentsList
                students={students}
                onEdit={handleEdit}
                onDelete={handleDelete}
                isDeleting={isDeleting}
            />
        </main>
    );
}

export default StudentsPage;