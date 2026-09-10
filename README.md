Student Management System

A full-stack Student Management System built as a practical project for managing students and faculties through a REST API and a React-based frontend.

The project currently includes student and faculty data management, relational database integration, API communication, and server-side validation.

Tech Stack
Frontend
React
Vite
Redux Toolkit
RTK Query
React Redux
JavaScript
HTML5
CSS3
Backend
Node.js
Express.js
Prisma ORM
PostgreSQL
Zod
REST API
Project Structure
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
Current Features
Student Management
Create students
Retrieve all students
Retrieve a student by ID
Update student information
Delete students
Faculty relationship support
PostgreSQL database persistence
Faculty Management
Faculty data management
Unique faculty codes
Student-to-faculty relational structure
API
RESTful API architecture
Express routes
Controllers
Service layer
Prisma database queries
Centralized request flow
Validation
Zod-based server-side validation
Validation middleware
Structured validation errors
Request data validation before reaching business logic
Frontend
React application
Redux Toolkit store
RTK Query API integration
Student data retrieval from backend
API state management
Application Architecture

The backend follows a layered structure:

Request
   ↓
Route
   ↓
Validation Middleware
   ↓
Controller
   ↓
Service
   ↓
Prisma ORM
   ↓
PostgreSQL
   ↓
Response

This structure separates routing, request handling, validation, business logic, and database access.

Database Models

The application currently uses relational models including:

Student
ID
First name
Last name
Email
Student number
Course
Phone
Date of birth
Faculty
Created date
Updated date
Faculty
ID
Name
Unique code
Created date
Updated date

Each student can be associated with a faculty through a relational database connection.

API Endpoints

Example student endpoints:

GET /api/students
GET /api/students/:id
POST /api/students
PATCH /api/students/:id
DELETE /api/students/:id

Faculty endpoints are available under:

/api/faculties
Installation
1. Clone the repository
git clone https://github.com/jtmultiverse-dev/student-management-system.git
cd student-management-system
Backend Setup

Move into the backend directory:

cd backend

Install dependencies:

npm install

Create your environment file:

touch .env

Add your PostgreSQL database connection:

DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/student_management"

Generate the Prisma client:

npx prisma generate

Run database migrations if required:

npx prisma migrate dev

Start the backend:

npm run dev

The backend runs on:

http://localhost:5002
Frontend Setup

Open another terminal and move into the frontend directory:

cd frontend

Install dependencies:

npm install

Start the development server:

npm run dev

Vite will display the local frontend URL in the terminal.

Environment Variables

Environment files are excluded from Git using .gitignore.

Never commit real database passwords, API keys, tokens, or other credentials.

An .env.example file can be added for configuration examples without exposing private values.

Development Goals

This project is being developed incrementally with focus on understanding the complete full-stack application flow.

Planned improvements include:

Authentication and authorization
Improved security
Search
Filtering
Pagination
Advanced form validation
Improved error handling
Reusable React components
Material UI interface
Student detail pages
Dashboard interface
Better loading and error states
Responsive design
Deployment
Docker support
Purpose

The main goal of this project is to practice and demonstrate full-stack development concepts including:

Frontend and backend communication
REST API design
Relational databases
Server-side validation
Application architecture
State management
CRUD operations
Reusable and maintainable code structure
Author

Jaba Tavdgiridze

GitHub:
https://github.com/jtmultiverse-dev

Status

Work in progress.