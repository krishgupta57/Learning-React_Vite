import { useState } from "react"

function Form(){

    let[name,setName]=useState()
    let[email,setEmail]=useState()
    let[contact,setContact]=useState()
    let[age,setAge]=useState()
    let[location,setLocation]=useState()

    function handlename(e){
        console.log(e.target.value)
        setName(e.target.value)
    }

    function handlesubmit(e){
        e.preventDefault()
        console.log(name+" "+email+" "+contact+" "+age+" "+location)
    }

    return(
        <>
            <form action="" onSubmit={handlesubmit} >
                <label htmlFor="">Name</label>
                <input type="text" onChange={handlename} />

                <br /> <br />

                <label htmlFor="">Email</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} />

                <br /> <br />

                <label htmlFor="">Contact</label>
                <input type="text" onChange={(e)=>setContact(e.target.value)} />

                <br /><br />

                <label htmlFor="">Age</label>
                <input type="text" onChange={(e)=>setAge(e.target.value)} />

                <br /><br />

                <label htmlFor="">Location</label>
                <input type="text" onChange={(e)=>setLocation(e.target.value)} />

                <br /><br />

                <input type="submit" />
            </form>

            <h1> {name} </h1>
            <h1> {email} </h1>
            <h1> {contact} </h1>
            <h1> {age} </h1>
            <h1> {location} </h1>
        </>
    )
}

export default Form