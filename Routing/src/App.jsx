import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Servises from "./Servises"
import Work from "./Work"
import Navbar from "./Navbar"
import './App.css'

function App(){
  return(
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route path="/home" element={<Home />} />  {/*for other webpage*/}
          <Route index element={<Home />} />  {/*for the index page*/}

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/services" element={<Servises />} />

          <Route path="/work" element={<Work />} />

        </Route>

      </Routes>
    </>
  )
}

export default App