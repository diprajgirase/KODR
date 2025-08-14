import React from 'react'
import { MdHomeFilled, MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from 'react-icons/si';
import { MdHistory, MdPlaylistPlay, MdVideoLibrary, MdSchool, MdWatchLater, MdThumbUp, MdFileDownload } from "react-icons/md";

const Sidebar = () => {
    return (
        <div style={{ backgroundColor: "#0F0F0F" }} className="w-60 text-white min-h-screen overflow-y-auto p-2">
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
    )
}

export default Sidebar