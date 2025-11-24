import bgimg from './assets/bg2.png'
import ig from './assets/react.svg'

function Home(){
    return(
        <>
            <img src={bgimg} alt="" className='h-screen w-screen mb-4' />
            <section className='flex justify-around text-center' >
                <div>
                    <img src={ig} alt="" className='h-40' />
                    <h1>react</h1>
                    <button className='rounded p-4 bg-black text-white hover:bg-gray-300 hover:text-black'>Learning</button>
                </div>
                <div>
                    <img src={ig} alt="" className='h-40' />
                    <h1>react</h1>
                    <button className='rounded p-4 bg-black text-white hover:bg-gray-300 hover:text-black'>Learning</button>
                </div>
                <div>
                    <img src={ig} alt="" className='h-40' />
                    <h1>react</h1>
                    <button className='rounded p-4 bg-black text-white hover:bg-gray-300 hover:text-black'>Learning</button>
                </div>
            </section>
        </>
    )
}

export default Home