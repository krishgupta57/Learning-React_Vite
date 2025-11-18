import { useState } from "react"

function Counter(){
    let [counter,setCounter] = useState(0)

    function Increment(){
        counter = counter+1
        setCounter(counter)
    }
    return(
        <>
            <h1>This is Counter page</h1>
            <h1> {counter} </h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={()=>setCounter(counter-1)}>Decrement</button>
            <button onClick={()=>setCounter(0)}>reset</button>
        </>
    )
}

export default Counter