<div align="center">

# Student Management System

A full-stack web application for managing students and faculties through a REST API and a React-based frontend.

![Status](https://img.shields.io/badge/status-in%20progress-blue)
![Frontend](https://img.shields.io/badge/frontend-React-61DAFB)
![Backend](https://img.shields.io/badge/backend-Express-black)
![Database](https://img.shields.io/badge/database-PostgreSQL-336791)
![ORM](https://img.shields.io/badge/ORM-Prisma-2D3748)
![Validation](https://img.shields.io/badge/validation-Zod-7C3AED)

</div>

---

## Overview

**Student Management System** is a practical full-stack project built to manage students and faculties in a structured way.

The project demonstrates:

- Frontend and backend communication
- REST API architecture
- Relational database integration
- Server-side validation
- State management with Redux Toolkit and RTK Query
- Maintainable project structure using controllers, services, and routes

---

## Features

### Current Features

- Create students
- Retrieve all students
- Retrieve a single student by ID
- Faculty management
- Student-to-faculty relationship
- REST API integration
- PostgreSQL database persistence
- Prisma ORM integration
- Zod-based server-side validation
- Redux Toolkit state management
- RTK Query API communication

### Planned Improvements

- Update student information
- Delete student records
- Authentication and authorization
- Search and filtering
- Pagination
- Better error handling
- Responsive UI improvements
- Reusable UI components
- Material UI integration
- Dashboard interface
- Deployment
- Docker support

---

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- HTML5
- CSS3
- Redux Toolkit
- RTK Query
- React Redux

### Backend
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- Zod
- REST API

---

## Project Structure

```text
student-management-system/
├── backend/
│   ├── prisma/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── validation/
│   ├── package.json
│   └── prisma.config.ts
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md