import React from "react";

const Blog = () => {
  const posts = [
    {
      title: "My First Blog Post",
      desc: "A quick introduction to my blogging journey and what you can expect here.",
      img: "https://images.unsplash.com/photo-1689754014830-c3bb50b5d7af?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Learning React the Fun Way",
      desc: "How I approached learning React and made it an enjoyable process.",
      img: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "UI/UX Basics for Developers",
      desc: "A guide to understanding the core principles of user interface and user experience design.",
      img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Mastering Tailwind CSS",
      desc: "Tips and tricks for building responsive designs quickly with Tailwind.",
      img: "https://images.unsplash.com/photo-1731937389219-0482470c099e?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Productivity Hacks for Developers",
      desc: "Practical tips to improve your focus and get more done.",
      img: "https://plus.unsplash.com/premium_photo-1686819425798-3d9cabda8d26?q=80&w=1266&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Latest Trends in Web Development",
      desc: "Exploring the new technologies shaping the web.",
      img: "https://images.unsplash.com/photo-1590345143469-62fb7478ff4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my latest posts on web development, design, and tech trends.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3 hover:text-indigo-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
