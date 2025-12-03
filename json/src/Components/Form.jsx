import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Form(){
    let[frmdata,setFrmdata]  = useState({})
    let navigate = useNavigate()

    function handleinput(e){
        let {name,value} =  e.target
        setFrmdata({...frmdata,[name]:value})
    }

    function finalsubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3000/userdata',frmdata)
        .then(r=>alert("Data Inserted"))
        navigate('./Show')
    }
    return(
        <>
            <h1>This is Form Page</h1>
            <form action="" onSubmit={finalsubmit} >
                <label htmlFor="">Name</label>
                <input type="text" name="name" onChange={handleinput} /> <br /><br />

                <label htmlFor="">Age</label>
                <input type="text" name="age" onChange={handleinput} /> <br /><br />

                <label htmlFor="">Contact</label>
                <input type="text" name="contact" onChange={handleinput} /> <br /><br />

                <label htmlFor="">City</label>
                <input type="text" name="city" onChange={handleinput} /> <br /><br />

                <input type="submit" />
            </form>
        </>
    )
}

export default Form