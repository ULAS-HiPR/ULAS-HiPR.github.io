import Navbar from "./Components/NavBar"
import Home from "./Components/pages/Home"
import About from "./Components/pages/About"
import { Route, Routes } from "react-router-dom"
import Projects from "./Components/pages/Projects"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer"


function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
