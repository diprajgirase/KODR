import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../screens/Home'
import Profile from '../screens/Profile'

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
            </Routes>
        </div>
    )
}

export default AppRouter