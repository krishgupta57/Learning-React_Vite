import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from "./Navber"
import Counter from './Counter'
import Color from './Color'

function App(){
  return(
    <>
      <Nav />
      <Routes>
        <Route path='/counter' element={<Counter />} />
        <Route path='/color' element={<Color />} />
      </Routes>
    </>
  )
}

export default App