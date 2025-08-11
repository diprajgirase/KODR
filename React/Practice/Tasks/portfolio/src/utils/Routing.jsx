import React from 'react'
import { Route, Routes } from 'react-router'
import Contact from '../screens/Contact'
import Projects from '../screens/Projects'
import About from '../screens/About'
import Home from '../screens/Home'

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/projects' element={<Projects />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        </div>
    )
}

export default Routing