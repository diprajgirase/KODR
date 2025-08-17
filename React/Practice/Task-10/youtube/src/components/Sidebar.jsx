import React, { useEffect, useRef, useState } from 'react';
import { MdHomeFilled, MdSubscriptions, MdClose } from "react-icons/md";
import { SiYoutubeshorts } from 'react-icons/si';
import { MdHistory, MdPlaylistPlay, MdVideoLibrary, MdSchool, MdWatchLater, MdThumbUp, MdFileDownload } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const hamburgerButton = document.querySelector('[data-hamburger-button]');
      
      if (sidebarRef.current && 
          !sidebarRef.current.contains(event.target) && 
          !hamburgerButton?.contains(event.target) && 
          window.innerWidth < 768) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Prevent background scrolling when sidebar is open on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
    return (
        <div 
          ref={sidebarRef}
          style={{ backgroundColor: "#0F0F0F" }} 
          className={`fixed md:static z-50 w-64 text-white min-h-screen overflow-y-auto p-2 transition-transform duration-300 ease-in-out transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          {/* Close button for mobile */}
          <div className="flex justify-end p-2 md:hidden">
            <button 
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-800"
              aria-label="Close sidebar"
            >
              <MdClose size={24} />
            </button>
          </div>
            {/* Main Navigation */}
            <div className="space-y-1">
                <div className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg cursor-pointer bg-gray-800">
                    <MdHomeFilled size={22} />
                    <span>Home</span>
                </div>
                <div className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg cursor-pointer">
                    <SiYoutubeshorts size={22} />
                    <span>Shorts</span>
                </div>
                <div className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg cursor-pointer">
                    <MdSubscriptions size={22} />
                    <span>Subscriptions</span>
                    <span className="text-blue-400 ml-auto">•</span>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-3 border-gray-700" />

            {/* You Section */}
            <div className="p-2">
                <h2 className="text-gray-400 mb-2">You</h2>
                <div className="space-y-1">
                    <div className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg cursor-pointer">
                        <MdHistory size={22} />
                        <span>History</span>
                    </div>
                    <div className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg cursor-pointer">
                        <MdPlaylistPlay size={22} />
                        <span>Playlists</span>
                    </div>
                    <div className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg cursor-pointer">
                        <MdVideoLibrary size={22} />
                        <span>Your videos</span>
                    </div>
                    <div className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg cursor-pointer">
                        <MdSchool size={22} />
                        <span>Your courses</span>
                    </div>
                    <div className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg cursor-pointer">
                        <MdWatchLater size={22} />
                        <span>Watch Later</span>
                    </div>
                    <div className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg cursor-pointer">
                        <MdThumbUp size={22} />
                        <span>Liked videos</span>
                    </div>
                    <div className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg cursor-pointer">
                        <MdFileDownload size={22} />
                        <span>Downloads</span>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-3 border-gray-700" />

            {/* Subscriptions */}
            <div className="p-2">
                <h2 className="text-gray-400 mb-2">Subscriptions</h2>
                <div className="space-y-1">
                    {[
                        { name: "[Nintai]", img: "https://via.placeholder.com/24" },
                        { name: "Aakanksha Monga", img: "https://via.placeholder.com/24" },
                        { name: "Aakriti Rana", img: "https://via.placeholder.com/24" },
                    ].map((sub, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg cursor-pointer"
                        >
                            <img src={sub.img} alt={sub.name} className="w-6 h-6 rounded-full" />
                            <span>{sub.name}</span>
                            <span className="text-blue-400 ml-auto">•</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;