import React from "react";

const Home = () => {
  return (
    <section className="min-h-[65vh] md:min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-5xl w-full">
        
        {/* Main text */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-snug text-center break-words">
          My name is{" "}
          <span className="inline-block rounded-full overflow-hidden align-middle mx-1 sm:mx-2 w-16 sm:w-20 md:w-28 h-8 sm:h-10 md:h-14">
            <img
              src="https://images.ideoon.ch/images/product_images/popup_images/ch4022_12.jpg"
              alt="Looking through binoculars"
              className="w-full h-full object-cover"
            />
          </span>
          Dipraj. <br /> I build products and{" "}
          <span className="inline-block rounded-full overflow-hidden align-middle mx-1 sm:mx-2 w-16 sm:w-20 md:w-28 h-8 sm:h-10 md:h-14">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOzsSsa-MdkJUNdsOfcNVpRKhtaRRWcMmthcooVt1bHVRj_kxwG7Mw6GNVFO1x52GJeio&usqp=CAU"
              alt="Handshake"
              className="w-full h-full object-cover"
            />
          </span>
          solve problems that matter..
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-center text-base sm:text-lg md:text-xl text-gray-600">
          Engineer <span className="mx-2">•</span> Developer{" "}
          <span className="mx-2">•</span> Innovator{" "}
          <span className="mx-2">•</span> Designer
        </p>
      </div>
    </section>
  );
};

export default Home;
