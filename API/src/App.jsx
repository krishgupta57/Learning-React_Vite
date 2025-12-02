import { useEffect, useState } from "react"
import axios from "axios"

function App(){
  let [apidata,setApidata] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/userdata')
    .then((res)=>setApidata(res.data))
  },[])
  return(
    <>
      <h1>This is app page</h1>
      <table border="">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Contact</th>
          <th>City</th>
        </tr>
        {
          apidata.map((e)=>(
            <tr>
              <th> {e.id} </th>
              <th> {e.name} </th>
              <th> {e.age} </th>
              <th> {e.contact} </th>
              <th> {e.city} </th>
            </tr>
          ))
        }
      </table>
    </>
  )
}

export default App