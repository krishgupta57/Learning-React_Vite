import { useState } from "react"

function Counter(){
    let [counter,setCounter] = useState(0)
    return(
        <>
            <h1>This is Counter page</h1>
            <h1> {counter} </h1>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>
            <button onClick={()=>setCounter(counter-1)}>Decrement</button>
            <button onClick={()=>setCounter(0)}>reset</button>
        </>
    )
}

export default Counter