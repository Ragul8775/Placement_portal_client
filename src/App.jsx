import React from "react"
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {  AuthProvider } from "./Validators/Authentication"
import Login from "./Scenes/Login"
import Homepage from "./Scenes/Homepage"
import StudentDetail from "./Scenes/StudentDetail"
import ProtectedRoutes from "./Validators/ProtectedRoutes"
function App() {

  return (
 <Router>
  <AuthProvider>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/home" element={
  <ProtectedRoutes>
    <Homepage />
  </ProtectedRoutes>
} />
<Route path="/student_details" element={
  <ProtectedRoutes>
    <StudentDetail />
  </ProtectedRoutes>
} />
  </Routes>
  </AuthProvider>
 </Router>
  )
}

export default App
