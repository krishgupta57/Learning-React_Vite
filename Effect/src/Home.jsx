import { useState } from "react"

function Home(){
    let [person,setPerson] = useState([
        {
            name:"Suneel",age:90,city:"Bhopal"
        },
        {
            name:"Aryan",age:12,city:"Indore"
        },
        {
            name:"Bhupi",age:24,city:"Gwalior"
        },
    ])
    return(
        <>
            <h1>Home page</h1>
            {
                person.map((e)=>{ return <h1>{e.name}</h1> })
            }
        </>
    )
}

export default Home