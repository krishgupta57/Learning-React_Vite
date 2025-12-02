import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(){

    let[signdata,setSigndata] = useState({})
        
        let navigator = useNavigate()

        function takeinput(e){
            let {name,value} = e.target
            setSigndata({...signdata,[name]:value})
        }

        function finalsubmit(e){
            e.preventDefault()
            localStorage.setItem("signdata",JSON.stringify(signdata))
            console.log(signdata)
            navigator('./login')
        }
    
    
        return(
        <>
            <h1>this is Signup page</h1>
            <form action="" onSubmit={finalsubmit}>
            <label htmlFor="">Username</label>
            <input type="text" name="username" onChange={takeinput} /> <br /><br />

            <label htmlFor="">Password</label>
            <input type="text" name="password" onChange={takeinput} /><br /><br />

            <input type="submit" />
        </form>
    </>
    )
}

export default Signup