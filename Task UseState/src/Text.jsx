import { useState } from "react"

function Text(){
    let[text,setText]=useState(false)

    return(
        <>
            { text ? <h1>Hello Students...!</h1> : <h1></h1> }
            <button onClick={()=>setText(!text)} >Show Massage</button>
            <h1> {text} </h1>
        </>
    )
}

export default Text