import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/diprajgirase" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/diprajgirase/" },
    { name: "Twitter", url: "https://x.com/dipraj52" },
  ];

  return (
    <footer className="bg-white text-black py-12 px-6 relative border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        
        {/* Left Section */}
        <div className="flex flex-col gap-2">
          <p className="text-sm flex items-center gap-2">
            <span>©</span> 2025
          </p>
          <p className="uppercase tracking-wider text-sm">Have a project in mind?</p>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-200 select-none">
            LET’S TALK
          </h1>
          
          {/* Social Buttons */}
          <div className="flex gap-4 mt-4">
            {socialLinks.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end gap-4 w-full lg:w-auto">
          {/* Back to Top */}
          <a 
            href="#top" 
            className="flex items-center gap-2 uppercase text-sm font-semibold"
          >
            Back to Top
            <span className="bg-black text-white p-2 rounded-full">
              <FaArrowUp size={14} />
            </span>
          </a>

          {/* Credits */}
          <div className="text-right text-sm text-gray-500 leading-tight">
            <p>
              Design by <span className="text-black">Dipraj</span>
            </p>
            <p>
              Development by <span className="text-black">@Dipraj Sheryians</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
