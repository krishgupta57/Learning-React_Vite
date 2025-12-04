import axios from "axios"
import { useEffect, useState } from "react"

function Show(){
    let[data,setData]=useState([])
    function handledelete(id){
        // alert(id)       for checking if the id is getting or not
        axios.delete(`http://localhost:3000/userdata/${id}`)
        .then(e=>alert("Deleted...!!!"))
    }
    useEffect(()=>{
        axios.get('http://localhost:3000/userdata')
        .then((res)=>setData(res.data))
    },[handledelete])
    return(
        <>
            <h1>This is show data</h1>
            <table border="">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Contact</th>
                    <th>City</th>
                </tr>
                {
                    data.map((e)=>(
                        <tr>
                            <th> {e.id} </th>
                            <th> {e.name} </th>
                            <th> {e.age} </th>
                            <th> {e.contact} </th>
                            <th> {e.city} </th>
                            <th> <button onClick={()=>handledelete(e.id)} >Delete</button> </th>
                        </tr>
                    ))
                }
            </table>            
        </>
    )
}

export default Show