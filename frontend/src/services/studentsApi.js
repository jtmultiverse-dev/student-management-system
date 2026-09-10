import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentsApi = createApi({
    reducerPath: "studentsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5002/api",
    }),

    tagTypes: ["Student", "Faculty"],

    endpoints: (builder) => ({
        getStudents: builder.query({
            query: () => "/students",
            providesTags: ["Student"],
        }),

        getFaculties: builder.query({
            query: () => "/faculties",
            providesTags: ["Faculty"],
        }),

        createStudent: builder.mutation({
            query: (studentData) => ({
                url: "/students",
                method: "POST",
                body: studentData,
            }),

            invalidatesTags: ["Student"],
        }),

        updateStudent: builder.mutation({
            query: ({ id, data }) => ({
                url: `/students/${id}`,
                method: "PATCH",
                body: data,
            }),

            invalidatesTags: ["Student"],
        }),

        deleteStudent: builder.mutation({
            query: (id)  => ({
                url: `/students/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Student"],
        }),

        createFaculty: builder.mutation({
            query: (facultyData) => ({
                url: "/faculties",
                method: "POST",
                body: facultyData,
            }),
            invalidatesTags: ["Faculty"],
        }),

        updateFaculty: builder.mutation({
            query: ({id, data}) =>({
                url: `/faculties/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["Faculty"],
        }),

        deleteFaculty: builder.mutation({
            query: (id) => ({
                url: `/faculties/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Faculty"],
        })
    }),
});

export const { useGetStudentsQuery, useGetFacultiesQuery, useCreateStudentMutation, useCreateFacultyMutation, useUpdateStudentMutation, useDeleteStudentMutation, useUpdateFacultyMutation, useDeleteFacultyMutation } = studentsApi; 