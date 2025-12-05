import axios from "axios"
import { useEffect, useState } from "react"

function Show(){
    let[data,setData]=useState([])
    let [shwfrm,setShwfrm] = useState(false)
    let [editfrm,setEditfrm] = useState({})
    
    function handledelete(id){
        // alert(id)       for checking if the id is getting or not
        axios.delete(`http://localhost:3000/userdata/${id}`)
        .then(e=>alert("Deleted...!!!"))
    }
    
    useEffect(()=>{
        axios.get('http://localhost:3000/userdata')
        .then((res)=>setData(res.data))
    },[handledelete])

    function handleedit(e){
        let {name,value} = e.target
        setEditfrm({...editfrm,[name]:value})
    }

    function finalsubmit(e){
        e.preventDefault()
        axios.put(`http://localhost:3000/userdata/${editfrm.id}`,editfrm)
        .then(r=>alert("Updated...!!!"))
    }

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
                    <th>Delete</th>
                    <th>Edit</th>
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
                            <th> <button onClick={()=>(setShwfrm(true),setEditfrm(e))} >Edit</button> </th>
                        </tr>
                    ))
                }
            </table>
            <br />
            {
                shwfrm && <form action="" onSubmit={finalsubmit}>
                    <label htmlFor="">Id</label>
                    <input type="text" value={editfrm.id} name="id" onChange={handleedit} /> <br /><br />

                    <label htmlFor="">Name</label>
                    <input type="text" value={editfrm.name} name="name" onChange={handleedit} /> <br /><br />

                    <label htmlFor="">Age</label>
                    <input type="text" value={editfrm.age} name="age" onChange={handleedit} /> <br /><br />

                    <label htmlFor="">Contact</label>
                    <input type="text" value={editfrm.contact} name="contact" onChange={handleedit} /> <br /><br />

                    <label htmlFor="">City</label>
                    <input type="text" value={editfrm.city} name="city" onChange={handleedit} /> <br /><br />

                    <input type="submit" />
                </form>
            }
        </>
    )
}

export default Show