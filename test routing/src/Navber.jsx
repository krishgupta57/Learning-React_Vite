import { Link } from "react-router-dom"

function Nav(){
    return(
        <>
            <nav className="nav">
                <h1>LOGO</h1>
                <h1><Link to="/counter" >Counter</Link></h1>
                <h1><Link to="/color" >Color</Link></h1>
                <h1></h1>
            </nav>
        </>
    )
}

export default Nav