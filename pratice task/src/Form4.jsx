import { useState } from "react"

function Form4(){

    let [frmdata,setFrmdata] = useState({})

    function hinput(e){
        let{name,value} = e.target
        setFrmdata({...frmdata,[name]:value})
    }

    function fsubmit(e){
        e.preventDefault()
        console.log(frmdata)
    }

    return(
        <>
            <form action="" onSubmit={fsubmit} >
                <label htmlFor="">Name</label>
                <input type="text" name="name" onChange={hinput} className="border" /> <br /><br />

                <label htmlFor="">Age</label>
                <input type="text" name="Age" onChange={hinput} className="border"/> <br /><br />

                <label htmlFor="">City</label>
                <input type="text" name="city" onChange={hinput} className="border" /> <br /><br />

                <label htmlFor="">Email</label>
                <input type="text" name="email" onChange={hinput} className="border" /> <br /><br />

                <input type="submit" />
            </form>
        </>
    )
}

export default Form4