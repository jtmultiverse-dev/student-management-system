import express from "express";
import cors from "cors";
import facultyRoutes from "./routes/faculty.routes.js";
import studentRoutes from "./routes/student.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Student Management API is running",
    });
});

app.use("/api/faculties", facultyRoutes);
app.use("/api/students", studentRoutes);

export default app;