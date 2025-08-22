import React from "react"
import { Routes, Route } from "react-router";
import Home from "../screens/Home";
import Posts from "../screens/Posts";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts/>} />
        </Routes>
    )
}


export default AppRoutes;