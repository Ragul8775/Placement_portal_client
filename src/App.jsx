import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {  AuthProvider } from "./Validators/Authentication"
import Login from "./Scenes/Login"
import Homepage from "./Scenes/Homepage"
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
  </Routes>
  </AuthProvider>
 </Router>
  )
}

export default App
