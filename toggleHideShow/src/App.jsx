import { useState } from "react"
import Comp from "./Comp"
function App(){
  const [display,setdisplay]=useState(true)
  return(
    <div>
      <h2>Toggle in React</h2>
      <button onClick={()=>{setdisplay(!display)}}>Toggle</button>
      {
        display? <Comp />:null
      }



    </div>
    
  )
}
export default App