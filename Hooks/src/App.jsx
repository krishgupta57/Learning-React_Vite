import { useState } from "react"

function App(){
  let [data,setData]=useState(10)

  function Click(){
    alert("Working")
    setData(90)
  }
  return(
    <>
      <h1>This is app = {data}</h1>
      <button onClick={Click}>Click Hear</button>
    </>
  )
}

export default App