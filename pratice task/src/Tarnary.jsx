import { useState } from "react"

function Tarnary(){
    let [toggle,setToggle] = useState(false)
    return(
        <div className="text-center" >
            { toggle ? <h1>Good Morning</h1> : <h1>Good Night</h1> }
            <button onClick={()=>setToggle(!toggle)} className="border" >{ toggle ? "Night" :"Morning" }</button>
        </div>
    )
}

export default Tarnary