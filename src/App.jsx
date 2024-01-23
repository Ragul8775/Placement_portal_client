import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./Scenes/Login"
import Homepage from "./Scenes/Homepage"
function App() {

  return (
 <Router>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/home" element={<Homepage/>}/>
  </Routes>
 </Router>
  )
}

export default App
