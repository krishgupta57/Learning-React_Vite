import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Form4 from "./Form4"

function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
        
        <Route index element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/form4" element={<Form4 />} />

        </Route>
        
      </Routes>
    </>
  )
}

export default App