import { useState } from 'react'

import './App.css'
import { Usercontextprovider } from './CONTEXT/Userauth'
import Navbar from './pages/Navbar'
import Allroutes from './pages/Allroutes'
import Footer from './pages/Footer'

function App() {


  return (
    <>
    <Usercontextprovider>
      <Navbar/>
      <Allroutes/>
      <Footer/>
      </Usercontextprovider>
    </>
  )
}

export default App
