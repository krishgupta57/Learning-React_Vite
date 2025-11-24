import { useState } from "react"

function Contact(){

    let [frmdata,setFrmdata] = useState({name:"",age:"",city:""})

    function handleinput(e){
        let {name,value} = e.target
        setFrmdata({...frmdata,[name]:value})
    }

    function finalsubmit(e){
        e.preventDefault()
        console.log(frmdata)
    }


    return(
        <>
            <form action="" onSubmit={finalsubmit} >
                <label htmlFor="">Name</label>
                <input type="text" name="name" onChange={handleinput} className="border" /> <br /><br />

                <label htmlFor="">Age</label>
                <input type="text" name="age" onChange={handleinput} className="border" /> <br /><br />

                <label htmlFor="">City</label>
                <input type="text" name="city" onChange={handleinput} className="border" /> <br /><br />

                <input type="submit" className="py-2 px-4 rounded-full bg-black text-white" />
            </form>
        </>
    )
}

export default Contact