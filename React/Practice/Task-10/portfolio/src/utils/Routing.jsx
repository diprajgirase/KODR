import React from 'react'
import { Route, Routes } from 'react-router'
import Contact from '../screens/Contact'
import Projects from '../screens/Projects'
import About from '../screens/About'
import Home from '../screens/Home'
import Blog from '../screens/Blog'

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/projects' element={<Projects />}></Route>
                <Route path='/blog' element={<Blog />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                
            </Routes>
        </div>
    )
}

export default Routing