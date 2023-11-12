import Navbar from "./Components/NavBar"
import Home from "./Components/Home"
import About from "./Components/About"
import { Route, Routes } from "react-router-dom"
import Projects from "./Components/Projects"

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </>
  )
}

export default App
