import axios from "axios"
import { useEffect, useState } from "react"

function Show(){
    let[data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/userdata')
        .then((res)=>setData(res.data))
    },[])
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
                        </tr>
                    ))
                }
            </table>            
        </>
    )
}

export default Show