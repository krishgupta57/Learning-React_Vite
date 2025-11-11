function Child1({name,age,email,contact,city}){   // also destucuting of object
//    let {name,age,email,contact,city} = props  // destructuting of object
    return(
        <>
            <h1>Child 1 - {name} - {age} - {email} - {contact} - {city} </h1>
            {/* <h1>Child 1 - {props.name} - {props.age} - {props.email} - {props.contact} - {props.city} </h1> */}
        </>
    )
}

export default Child1