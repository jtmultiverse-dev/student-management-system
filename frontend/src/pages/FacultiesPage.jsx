import { useState } from "react";
import { Alert } from "antd";

import FacultyForm from "../components/FacultyForm.jsx";
import FacultiesList from "../components/FacultiesList.jsx";

import {
    useGetFacultiesQuery,
    useCreateFacultyMutation,
    useUpdateFacultyMutation,
    useDeleteFacultyMutation
} from "../services/studentsApi.js";

const initialFacultyFormData = {
    name: "",
    code: "",
};

function FacultiesPage() {
    const [facultyFormData, setFacultyFormData] =
        useState(initialFacultyFormData);

    const [editingFacultyId, setEditingFacultyId] =
        useState(null);

    const {
        data: response,
        isLoading,
        isError,
        error,
    } = useGetFacultiesQuery();

    const [
        createFaculty,
        {
            isLoading: isCreating,
            isSuccess: isCreateSuccess,
            isError: isCreateError,
            error: createError,
        },
    ] = useCreateFacultyMutation();

    const [
        updateFaculty,
        {
            isLoading: isUpdating,
            isSuccess: isUpdateSuccess,
            isError: isUpdateError,
            error: updateError,
        },
    ] = useUpdateFacultyMutation();

    const [
        deleteFaculty,
        {
            isLoading: isDeleting,
            isSuccess: isDeleteSuccess,
            isError: isDeleteError,
            error: deleteError,
        },
    ] = useDeleteFacultyMutation();

    const faculties = response?.data ?? [];

    const isEditing = editingFacultyId !== null;

    const isSaveError = isEditing
        ? isUpdateError
        : isCreateError;

    const saveError = isEditing
        ? updateError
        : createError;

    const fieldErrors =
        saveError?.data?.errors?.fieldErrors ?? {};

    const formErrors =
        saveError?.data?.errors?.formErrors ?? [];

    const isSaving = isEditing
        ? isUpdating
        : isCreating;

    function handleFacultyChange(event) {
        const { name, value } = event.target;

        setFacultyFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    }

    async function handleFacultySubmit(event) {
        event.preventDefault();

        try {
            if (editingFacultyId !== null) {
                await updateFaculty({
                    id: editingFacultyId,
                    data: facultyFormData,
                }).unwrap();
            } else {
                await createFaculty(facultyFormData).unwrap();
            }

            setFacultyFormData(initialFacultyFormData);
            setEditingFacultyId(null);
        } catch (error) {
            console.error("Failed to save faculty:", error);
        }
    }

    function handleFacultyEdit(faculty) {
        setEditingFacultyId(faculty.id);

        setFacultyFormData({
            name: faculty.name ?? "",
            code: faculty.code ?? "",
        });
    }

    function handleCancelEdit() {
        setEditingFacultyId(null);
        setFacultyFormData(initialFacultyFormData);
    }

    async function handleFacultyDelete(faculty) {
        const confirmed = window.confirm(
            `ნამდვილად გსურთ წაშალოთ ${faculty.name} ?`
        );

        if (!confirmed) {
            return;
        }

        try {
            await deleteFaculty(faculty.id).unwrap();

            if (editingFacultyId === faculty.id) {
                handleCancelEdit();
            }
        } catch (error) {
            console.error("ფაკულტეტის წაშლა ვერ შესრულდა", error);
        }
    }

    return (
        <section>
            <h1>Faculties</h1>

            <FacultyForm
                formData={facultyFormData}
                fieldErrors={fieldErrors}
                isEditing={isEditing}
                isSaving={isSaving}
                onChange={handleFacultyChange}
                onSubmit={handleFacultySubmit}
                onCancelEdit={handleCancelEdit}
            />

            {isError && (
                <Alert
                    type="error"
                    message={
                        error?.data?.message ??
                        "Failed to load faculties"
                    }
                    showIcon
                    style={{ marginBottom: 24 }}
                />
            )}

            {isCreateSuccess && (
                <Alert
                    type="success"
                    message="Faculty created successfully"
                    showIcon
                    style={{ marginBottom: 24 }}
                />
            )}

            {isCreateError && (
                <Alert
                    type="error"
                    message={
                        createError?.data?.message ??
                        "Failed to create faculty"
                    }
                    showIcon
                    style={{ marginBottom: 24 }}
                />
            )}

            {isUpdateSuccess && (
                <Alert
                    type="success"
                    message="Faculty updated successfully"
                    showIcon
                    style={{ marginBottom: 24 }}
                />
            )}

            {isUpdateError && (
                <Alert
                    type="error"
                    message={
                        updateError?.data?.message ??
                        "Failed to update faculty"
                    }
                    showIcon
                    style={{ marginBottom: 24 }}
                />
            )}

            {isDeleteSuccess && (
                <Alert
                    type="success"
                    message="Faculty deleted successfully"
                    showIcon
                    style={{ marginBottom: 24 }}
                />
            )}

            {isDeleteError && (
                <Alert
                    type="error"
                    message={
                        deleteError?.data?.message ??
                        "Failed to delete faculty"
                    }
                    showIcon
                    style={{ marginBottom: 24 }}
                />
            )}

            <FacultiesList
                faculties={faculties}
                isLoading={isLoading}
                onEdit={handleFacultyEdit}
                onDelete={handleFacultyDelete}
                isDeleting={isDeleting}
            />

        </section>
    );
}

export default FacultiesPage;