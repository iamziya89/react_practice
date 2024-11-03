import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import User from './components/User'
import Wrapper from './components/Wrapper'
function App() {

  return (
    <>
      <h1>Mohd Ziya</h1>
      <Wrapper color="orange">
       <h1>Wrapper Components 1234</h1>
      </Wrapper>
      <Wrapper>
       <h1>Wrapper Ziya</h1>
      </Wrapper>
      <Wrapper>
       <h1>Wrapper Admin</h1>
      </Wrapper>
      
    </>
  )
}

export default App
