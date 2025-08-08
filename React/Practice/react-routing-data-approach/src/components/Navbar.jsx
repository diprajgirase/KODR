import React from 'react'
import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/About" end>About</NavLink>
    
            </nav>
        </div>
    )
}

export default Navbar