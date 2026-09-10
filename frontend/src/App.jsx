import {
    Navigate,
    Route,
    Routes,
} from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import StudentsPage from "./pages/StudentsPage.jsx";
import FacultiesPage from "./pages/FacultiesPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

function App() {
    return (
        <Routes>
            <Route
                path="/admin"
                element={<AdminLayout />}
            >
                <Route
                    index
                    element={
                        <Navigate
                            to="dashboard"
                            replace
                        />
                    }
                />

                <Route
                    path="dashboard"
                    element={<DashboardPage />}
                />

                <Route
                    path="students"
                    element={<StudentsPage />}
                />

                <Route
                    path="faculties"
                    element={<FacultiesPage />}
                />

                <Route
                    path="settings"
                    element={<SettingsPage />}

                 />   
            </Route>

            <Route
                path="*"
                element={
                    <Navigate
                        to="/admin/dashboard"
                        replace
                    />
                }
            />
        </Routes>
    );
}

export default App;