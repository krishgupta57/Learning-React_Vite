import { Route, Routes } from "react-router-dom"
import Form from "./Components/Form"
import Show from "./Components/Show"

function App(){
  return(
    <>
      <Routes>
        <Route index element={<Form />} />
        <Route path="/show" element={<Show />}  />
      </Routes>
    </>
  )
}

export default App