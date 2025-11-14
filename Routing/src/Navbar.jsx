import { Link, Outlet } from "react-router-dom"

function Navbar(){
    return(
        <>
            <nav className="navbar">
                <h1>LOGO</h1>
                <ul className="list">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about" >ABOUT</Link></li>
                    <li><Link to="/contact" >CONTACT</Link></li>
                    <li><Link to="/services" >SERVICES</Link></li>
                </ul>
                <h1><button>LOGIN</button></h1>
            </nav>
            <Outlet />
            <div>
                <h1>Footer</h1>
            </div>
        </>
    )
}

export default Navbar