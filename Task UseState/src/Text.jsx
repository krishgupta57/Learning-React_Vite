import { useState } from "react"

function Text(){
    let[text,setText]=useState("")

    return(
        <>
            <button onClick={()=>setText("Hello Students!")} onDoubleClick={()=>setText("")} >Show Massage</button>
            <h1> {text} </h1>
        </>
    )
}

export default Text