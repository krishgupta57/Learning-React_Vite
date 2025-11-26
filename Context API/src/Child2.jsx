import React, { createContext, useContext } from 'react'
import { data } from './App'
import Child3 from './Child3'

let data2 = createContext()
let name = "Another data"

const Child2 = () => {
  let val =  useContext(data)
  return (
    <>
        {/* <data.Consumer>
            {
                (reciver)=>{return <h1>{reciver}</h1> }
            }
        </data.Consumer> */}

        <h1>{val.name} {val.age} </h1>

        <data2.Provider value={name}>
            <Child3 />
        </data2.Provider>
    </>
  )
}

export default Child2

export {data2}