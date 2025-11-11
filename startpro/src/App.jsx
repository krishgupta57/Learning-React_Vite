import './App.css'

import First from "./First"
import Home from "./Home"
import About from "./About"
import { Contact,Contactus} from './Contact'
import Help from "./Help"

function App(){
  return(
    <>
      <h1 className='head'>welcome</h1>
      <First />
      <Home />
      <About />
      <Contact />
      <Contactus />
      <Help />
    </>
  )
}

export default App