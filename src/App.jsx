import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './ComponentFile/HomeFile/Home'
import NaveBar from './ComponentFile/NaveBarFile/NaveBar'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     {/* <Home></Home> */}
     <NaveBar></NaveBar>
     <Outlet></Outlet>

     
    </div>
  )
}

export default App
