import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './ComponentFile/HomeFile/Home'
import NaveBar from './ComponentFile/NaveBarFile/NaveBar'
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from './ComponentFile/LoadingSpinner/Loading'

function App() {

  const navigation = useNavigation();

  return (
    <div className="App">
      {/* <Home></Home> */}
      <NaveBar></NaveBar>
      <div className='text-center'> {navigation.state === "loading" && <Loading></Loading>} </div>
      <Outlet></Outlet>


    </div>
  )
}

export default App
