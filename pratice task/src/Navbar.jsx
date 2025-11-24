import { Link, Outlet } from "react-router-dom"

function Navbar(){
    return(
        <>
            <nav className="flex justify-around bg-gray-300 p-4">
                <h1>React</h1>
                <ul className="flex space-x-18">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>
                    <li><Link to="/form4" >Form4</Link></li>
                    
                </ul>
                    <button className="px-4 py-2 bg-white rounded-full hover:bg-black hover:text-white cursor-pointer">Theme</button>
            </nav>
            <Outlet />
            <div className="text-center p-4 bg-gray-300 mt-4" >
                <h1>footer</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum corporis error repellendus recusandae exercitationem vero <br /> explicabo, quibusdam cumque aliquid, iure voluptate nihil architecto? Commodi in beatae molestiae, nostrum earum ipsam!</p>
            </div>
        </>
    )
}

export default Navbar