import React, { useState } from 'react';

// Using inline SVGs to avoid the need for external packages like 'react-icons'.
// This makes the code self-contained and prevents compilation errors.

export const HamburgerIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const SearchIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const MicrophoneIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
);

const PlusIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const BellIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 12 2a6 6 0 0 0-6 6c0 4.19-1.55 7.55-3 9.47V19h18v-1.53c-1.45-1.92-3-5.28-3-9.47zm-8 12a2 2 0 0 0 4 0H10z"></path>
  </svg>
);


const Navbar = ({ onToggleSidebar }) => {
  return (
    <div style={{ backgroundColor: "#0F0F0F" }} className=" text-white px-4 md:px-6 py-2 md:py-3 flex items-center justify-between shadow-lg">
      {/* Left Section */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Hamburger Icon (visible on all screens) */}
        <button 
          onClick={onToggleSidebar}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors"
          data-hamburger-button
          aria-label="Toggle menu"
        >
          <HamburgerIcon className="text-xl md:text-2xl cursor-pointer" />
        </button>

        {/* Logo + Country */}
        <div className="flex items-center">
          <img
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo_dark.svg"
            alt="YouTube"
            className="h-4 md:h-6"
          />
          <span className="text-xs text-gray-400 ml-1 font-semibold">IN</span>
        </div>
      </div>

      {/* Center Section (Search Bar) - Hidden on mobile, visible on medium screens and up */}
      <div className="hidden md:flex items-center flex-1 max-w-2xl mx-4 lg:mx-6">
        <div className="flex items-center w-full border border-gray-700 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 text-white outline-none text-sm lg:text-base"
            style={{ backgroundColor: "#0F0F0F" }}
          />
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-sm lg:text-lg">
            <SearchIcon />
          </button>
        </div>
        <button className="ml-2 md:ml-4 p-2 md:p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-base md:text-lg transition-colors">
          <MicrophoneIcon />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 md:gap-6">
        {/* Mobile Search Icon - Visible only on small screens */}
        <button className="md:hidden text-lg p-2 rounded-full hover:bg-gray-800 transition-colors">
          <SearchIcon />
        </button>

        {/* Create Button - Text is hidden on mobile */}
        <button className="flex items-center gap-2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-sm md:text-base transition-colors">
          <PlusIcon className="text-lg" />
          <span className="hidden md:inline">Create</span>
        </button>
        
        {/* Bell Icon - Wrapped in a button for accessibility */}
        <button aria-label="Notifications" className="p-2 rounded-full hover:bg-gray-800 transition-colors">
          <BellIcon className="text-lg md:text-2xl" />
        </button>
        
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14-MJdy9Uybmqc3Ml2odISijI0gkjf4OqK9AYyfXNsPdFboIhTP9LY-LU2dSYN2aXwEo&usqp=CAU"
          alt="Profile"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;