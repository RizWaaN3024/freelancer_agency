import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Hero from './components/Hero/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero />
    </>
  )
}

export default App
