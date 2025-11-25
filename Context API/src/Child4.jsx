import React from 'react'
import { data2 } from './Child2'

const Child4 = () => {
  return (
    <>
        <data2.Consumer>
            {
                (reciever)=>{return <h1>{reciever}</h1> }
            }
        </data2.Consumer>
    </>
  )
}

export default Child4