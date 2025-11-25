import { createContext } from "react"
import Child1 from "./Child1"

let data = createContext()
let name = "Global from Parent"

function App(){
  return(
    <>
     <data.Provider value={name}>
      <Child1 />
     </data.Provider>
    </>
  )
}

export default App
export {data}