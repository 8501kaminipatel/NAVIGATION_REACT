import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Product from '../components/Product'
import Login from '../components/Login'
import Project from '../components/Project'
import Privatepage from './Privatepage'


const Allroutes = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={
                    <Privatepage>
                    <Product />
                    </Privatepage>
                    } />
                <Route path="/login" element={<Login />} />
                <Route path="/project/:id" element={<Project />} />
                
            </Routes>

        </>
    )
}

export default Allroutes