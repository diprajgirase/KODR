import React from "react";
import { NavLink } from "react-router";
import { FaHome, FaProjectDiagram, FaBlog, FaTwitter } from "react-icons/fa";
import { PiHandPeaceFill } from "react-icons/pi";

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300
    ${isActive ? "bg-gray-200 text-black font-semibold" : "text-gray-700 hover:bg-gray-100"}`;

  return (
    <div className="w-full flex justify-center py-5 px-2 sm:px-4">
      <nav className="bg-white shadow-md border border-gray-300 px-4 sm:px-6 py-2 flex flex-wrap justify-center items-center gap-2 sm:gap-4 rounded-xl">
        <NavLink to="/" className={linkClasses}>
          <FaHome /> Home
        </NavLink>
        <NavLink to="/projects" className={linkClasses}>
          <FaProjectDiagram /> Projects
        </NavLink>
        <NavLink to="/about" className={linkClasses}>
          <PiHandPeaceFill /> About
        </NavLink>
        <NavLink to="/blog" className={linkClasses}>
          <FaBlog /> Blog
        </NavLink>
        <NavLink to="/contact" className={linkClasses}>
          <FaTwitter /> Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
