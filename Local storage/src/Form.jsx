import { useEffect, useState } from "react"

function Form(){

    let [frmdata,setFrmdata] = useState({})
    let [localdata,setLocaldata] = useState({})

    function datasubmit(e){
        let {name,value} = e.target
        setFrmdata({...frmdata,[name]:value})
    }

    function handlesubmit(e){
        e.preventDefault()
        console.log(frmdata)
        localStorage.setItem('userdata',JSON.stringify(frmdata))
    }

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('userdata'))
        setLocaldata(data)
    },[handlesubmit])

    function deletedata(){
        localStorage.clear()
    }
    
    return(
        <>
            <form action="" onSubmit={handlesubmit}>
                <label htmlFor="">User name</label>
                <input type="text" name="username" onChange={datasubmit} /> <br /><br />

                <label htmlFor="">User Email</label>
                <input type="text" name="useremail" onChange={datasubmit} /> <br /><br />

                <label htmlFor="">User Password</label>
                <input type="text" name="userpassword" onChange={datasubmit} /> <br /><br />

                <input type="submit" />
            </form>

            {/* <h1>{localdata.username}</h1>
            <h1>{localdata.useremail}</h1>
            <h1>{localdata.userpassword}</h1> */}

            <button onClick={deletedata} >Delete</button>
        </>
    )
}

export default Form