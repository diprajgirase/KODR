import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQFh_j6FOzJEaA/profile-displayphoto-scale_400_400/B56ZfqSibHHEAk-/0/1751982419267?e=2147483647&v=beta&t=WXY1iODS8sS3nXIaIqGbabhLr8gk0AddM9YTwcWvl3Q"
            alt="Profile"
            className="w-64 h-64 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I’m <span className="font-semibold">Dipraj</span>, a passionate
            developer with a knack for turning ideas into functional, visually
            appealing applications. I specialize in{" "}
            <span className="text-blue-500 font-medium">React</span>,{" "}
            <span className="text-blue-500 font-medium">JavaScript</span>, and
            modern web technologies.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            My mission is to create digital experiences that not only work
            flawlessly but also delight users. When I’m not coding, you’ll find
            me exploring new design trends, learning emerging tech, and working
            on personal projects that challenge my creativity.
          </p>
          
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
