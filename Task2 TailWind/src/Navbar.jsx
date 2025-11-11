function Nav(){
    return(
        <>
            <nav className="flex justify-between p-5 bg-gray-300">
                <h1 className="text-xl">LOGO</h1>
                <ul className="flex space-x-8"> 
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Services</li>
                </ul>
                <div className="space-x-6">
                    <button className="px-4 py-2 bg-white rounded-full hover:bg-black hover:text-white cursor-pointer">Login</button>
                    <button className="px-4 py-2 bg-white rounded-full hover:bg-black hover:text-white cursor-pointer">sign up</button>
                </div>
            </nav>
        </>
    )
}

export default Nav