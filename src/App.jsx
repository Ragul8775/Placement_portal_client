import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Validators/Authentication";
import Login from "./Scenes/Login";
import Homepage from "./Scenes/Homepage";
import StudentDetail from "./Scenes/StudentDetail";
import ProtectedRoutes from "./Validators/ProtectedRoutes";
import FacultyAdivsor from "./Scenes/FacultyAdivsor";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoutes>
                <Homepage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/student_details"
            element={
              <ProtectedRoutes>
                <StudentDetail />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/fa_details"
            element={
              <ProtectedRoutes>
                <FacultyAdivsor />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
