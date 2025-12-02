import { useState } from "react"

function Login(){
    let[loginfrm,setLoginfrm] =useState({})

    function takeinput(e){
        let {name,value} = e.target
        setLoginfrm({...loginfrm,[name]:value})
    }

    let signdata = JSON.parse(localStorage.getItem('signdata'))

    function finalsubmit(e){
        e.preventDefault()
        if(loginfrm.username != signdata.username || loginfrm.password != signdata.password){
            alert("User not found")
        }
        else{
            alert("User found")
        }
    }

    return(
        <>
            <h1>This is login page</h1>
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

export default Login