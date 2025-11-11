// first type

// function Child2(props){
//     return(
//         <>
//             <h1>Child 2 {props.userinfo.username} </h1>

//         </>
//     )
// }

// export default Child2

// second type

function Child2({userinfo}){
    return(
        <>
            <h1>Child 2 {userinfo.username} {userinfo.userage} </h1>

        </>
    )
}

export default Child2