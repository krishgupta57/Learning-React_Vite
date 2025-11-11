import Child1 from "./Child1"
import Child2 from "./Child2"
import Ch1 from "./Ch1"

function App(){
  let userdata={
    username:"Krish",
    userage: 22,
    userlocation: "Bhopal"
  }
  return(
    <>
      <h1>Welcome To react class</h1>
      <Child1 name="Raj" age="30" email="Krish@gmail.com" contact={79654} city="Bhopal" />

      <hr />
      <Child2 userinfo = {userdata} />

      <hr />

      <Ch1 userinfo={userdata}/>
    </>
  )
}

export default App