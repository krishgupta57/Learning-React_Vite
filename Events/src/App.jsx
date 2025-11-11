function App(){
  function Click(){
    alert("Working")
  }
  function Dbclick(a){
    alert("Working"+a)
  }
  function Omenter(){
    alert("Working")
  }
  function Omleave(){
    alert("Working")
  }
  function Ocmenu(){
    alert("Working")
  }
  return(
    <>
      <h1>This is App</h1>

      <button onClick={Click}>On click</button>
      <button onDoubleClick={()=>Dbclick("React")}>Double Click</button>
      <button onMouseEnter={Omenter}>On Mouse Enter</button>
      <button onMouseLeave={Omleave}>On Mouse Leave</button>
      <button onContextMenu={Ocmenu}>On Context Menu</button>

    </>
  )
}

export default App