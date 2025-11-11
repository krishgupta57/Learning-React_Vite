function Nav(){
    return(
        <>
            <nav className="flex justify-between bg-pink-100 p-4">
                <h1 className="text-2xl">LOGO</h1>
                <ul className="flex space-x-10">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
                <div className="space-x-8">
                    <button className="cursor-pointer bg-black text-white py-2 px-6 rounded-full hover:bg-white hover:text-black">Signup</button>
                    <button className="cursor-pointer">Login</button>
                </div>
            </nav>
        </>
    )
}

export default Nav