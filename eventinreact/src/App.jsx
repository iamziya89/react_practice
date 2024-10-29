// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from "react"
function App(){
  const [fruit,setFruit]=useState("Apple")
  const [count,setCount]=useState(0)
  function handFruit(){
    setFruit("Bananananan")
  }
  function increCount(){
    setCount(count+1)
  }
  return (
    <>
      <div>
          <h2>{fruit}</h2>
          <button onClick={handFruit}>Click Me</button>
          <h2>Count: {count}</h2>
          <button onClick={increCount}>Increase the count</button>
      </div>
    </>
  )
}

export default App
