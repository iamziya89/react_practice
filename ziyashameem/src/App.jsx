 import { useState } from "react"
import Compo from "./Compo"
 const App=()=>{
  // 
  const [Count,setCount]=useState(0)

  const handlrCount=()=>{
    setCount(Count+1)
  }
  const handlrCount1=()=>{
    setCount(Count-1)
  }
  return(
    <div>
      <h3>Count :{Count}</h3>
      <button onClick={handlrCount}>Click Me</button>
      <button onClick={handlrCount1}>Click Me dec</button>
    </div>
  )
 }
 export default App