import React from 'react'
import { Link } from 'react-router'


const Navbar = () => {
    return (
        <div className='flex  bg-amber-300'>

            <nav className='flex gap-4'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>

        </div>
    )
}

export default Navbar