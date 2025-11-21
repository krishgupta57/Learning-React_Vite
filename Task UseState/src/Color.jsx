import { useState } from "react"

function Color(){
        let [color,setColor] = useState("White")
    return(
        <>
            <div style={{backgroundColor:color}}>
                <button onClick={()=>setColor('red')}>Red</button><br /><br />
                <button onClick={()=>setColor('blue')}>Blue</button><br /><br />
                <button onClick={()=>setColor('Yellow')}>Yellow</button><br /><br />
                <button onClick={()=>setColor('green')}>Green</button>
            </div>
        </>        
    )
}

export default Color