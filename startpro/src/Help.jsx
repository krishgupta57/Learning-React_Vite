function Help(){

    let name = "Krish"
    let num = 46551
    let age = 22
    let email = "krishgupta@7898.com"
    let pass = "wertyuiop["
    return(
        <>
            <h1 style={{backgroundColor:"red"}}>This is Help Page</h1>
            <h1>{name}</h1>
            <h2> {num} </h2>
            <h3> {age} </h3>
            <h4> {email} </h4>
            <h5> {pass} </h5>
        </>
    )
}

export default Help