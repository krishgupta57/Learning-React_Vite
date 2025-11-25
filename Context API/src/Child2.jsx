import React from 'react'
import { data } from './App'

const Child2 = () => {
  return (
    <>
        <data.Consumer>
            {
                (reciver)=>{return <h1>{reciver}</h1> }
            }
        </data.Consumer>
    </>
  )
}

export default Child2