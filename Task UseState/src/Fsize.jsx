import { useState } from "react"

function Fsize(){

    let[size,setSize]=useState(16)
    
    return(
        <div>
            <h1 style={{fontSize:size}} >Hello World</h1>
            <button onClick={()=>setSize(size+1)} >Increase size</button>
            <button onClick={()=>setSize(size-1)} >Decrease size</button>
        </div>
    )
}

export default Fsize