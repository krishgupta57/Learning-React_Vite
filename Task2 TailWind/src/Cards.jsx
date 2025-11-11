function Cards(){
    return(
        <>
            <section className="flex space-x-62 ">
                <div className="text-center">
                    <img src="bg1.webp" alt="" className="absolute"/>
                    <h1 className="relative text-3xl p-5">This is First Card</h1>
                    <button className="relative bg-black text-white p-2 rounded-full hover:bg-white hover:text-black cursor-pointer">Click Hear</button>
                </div>
                <div className="text-center">
                    <img src="bg2.webp" alt="" className="absolute"/>
                    <h1 className="relative text-3xl p-5">This is Second Card</h1>
                    <button className="relative bg-black text-white p-2 rounded-full hover:bg-white hover:text-black cursor-pointer">Click Hear</button>
                </div>
                <div className="text-center">
                    <img src="bg3.webp" alt="" className="absolute"/>
                    <h1 className="relative text-3xl p-5">This is third Card</h1>
                    <button className="relative bg-black text-white p-2 rounded-full hover:bg-white hover:text-black cursor-pointer">Click Hear</button>
                </div>
            </section>
        </>
    )
}

export default Cards