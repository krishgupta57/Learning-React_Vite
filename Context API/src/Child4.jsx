import React, { useContext } from 'react'
import { data2 } from './Child2'

const Child4 = () => {
  let val = useContext(data2)
  return (
    <>
        {/* <data2.Consumer>
            {
                (reciever)=>{return <h1>{reciever}</h1> }
            }
        </data2.Consumer> */}
        <h1>{val}</h1>
    </>
  )
}

export default Child4