 import { useState } from "react"
import Compo from "./Compo"
import './App.css'
 const App=()=>{
  // 
  const [Count,setCount]=useState(15)

  const handlrCount=()=>{
    setCount(Count=>Count+1)
    setCount(Count=>Count+1)
    setCount(Count=>Count+1)
    setCount(Count=>Count+1)
  }
  const handlrCount1=()=>{
    setCount(Count=>Count-1)
    setCount(Count=>Count-1)
  }
  return(
    <div>
      <h3 style={{backgroundColor:"red",color:'white',marginBottom:"1rem",border:'10px'}}>Count : {Count}</h3>
      <button style={{background:'#35485d',color:'white'}} onClick={handlrCount}>Click Me</button> &nbsp; &nbsp; &nbsp;
      <button style={{background:'#35485d',color:'white'}} onClick={handlrCount1}>Click Me dec</button>
    </div>
  )
 }
 export default App