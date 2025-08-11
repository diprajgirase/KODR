import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4">
      
      {/* Profile Image + Name Tag */}
      <div className="relative inline-block mb-6">
        <img
          src="https://via.placeholder.com/80" // replace with your image
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-gray-800 px-3 py-1 text-sm rounded-full shadow">
          Kawsar Ahmed 👋
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-medium leading-snug max-w-xl">
        Building digital{" "}
        <span className="font-bold">products, brands,</span> and experience.
      </h1>

      {/* Button */}
      <button className="mt-6 bg-black text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
        Latest Shots <span>↗</span>
      </button>
    </div>
  );
};

export default Home;
