import React from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
    image: "https://api.backlinko.com/app/uploads/2025/01/ecommerce-website-examples-featured-image.png",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"],
    live: "#",
    code: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://varadbhogayata.github.io/assets/img/project-music-player.png",
    tags: ["React", "Firebase", "Material-UI", "WebSocket"],
    live: "#",
    code: "#",
  },
  {
    title: "Crypto Screener Application",
    description:
      "A feature-rich Crypto Screener App showing details of cryptocurrencies with conversion to local currency.",
    image: "https://varadbhogayata.github.io/assets/img/gan.jpg",
    tags: ["React", "TailwindCSS", "Context API", "Recharts"],
    live: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <section className="bg-white text-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-3 text-gray-800">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Here are some of my recent projects that showcase my skills and creativity.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
