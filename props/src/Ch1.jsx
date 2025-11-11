import Ch2 from "./Ch2"

function Ch1({userinfo}){
    return(
        <>
            <h1> Ch1 - {userinfo.username} </h1>
            <Ch2 user = {userinfo} />
        </>
    )
}

export default Ch1