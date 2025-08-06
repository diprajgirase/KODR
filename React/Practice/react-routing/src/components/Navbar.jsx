import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex gap-6">

      <Link to="/" className="hover:text-yellow-400">Home</Link>
      <Link to="/about" className="hover:text-yellow-400">About</Link>
      
    </nav>
  );
};

export default Navbar;
