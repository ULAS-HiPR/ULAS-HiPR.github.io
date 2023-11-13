import Navbar from "./Components/NavBar"
import Home from "./Components/pages/Home"
import About from "./Components/pages/About"
import { Route, Routes } from "react-router-dom"
import Projects from "./Components/pages/Projects"

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
