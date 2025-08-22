import React, { useState, useEffect } from 'react';

const Home = () => {
  // Theme state ko manage karo
  const [theme, setTheme] = useState('light');

  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);


  useEffect(() => {
    // Local storage se saved theme check karo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Body element par 'dark-mode' class add ya remove karo
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Theme ko local storage mein save karo
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Theme toggle button ka handler
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="form-card">
      {/* Theme toggle button */}
      <button onClick={toggleTheme} className="theme-toggle-btn">
        {theme === 'light' ? (
          // Sun icon for light mode
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 11a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm0-4a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM7 7a1 1 0 01-1 1H5a1 1 0 110-2h1a1 1 0 011 1zm0 4a1 1 0 01-1 1H5a1 1 0 110-2h1a1 1 0 011 1zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5 13a1 1 0 01-1 1H3a1 1 0 010-2h1a1 1 0 011 1zM5 9a1 1 0 01-1 1H3a1 1 0 010-2h1a1 1 0 011 1zM17 9a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM17 13a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1z"></path><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"></path>
          </svg>
        ) : (
          // Moon icon for dark mode
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        )}
      </button>

      <h1 className="text-2xl font-bold text-center mb-6">New Post </h1>

      <form>
        {/* Description Field */}
        <div className="mb-6">
          <label htmlFor="description" className="form-label">Post Description</label>
          <textarea
            id="description"
            className="form-input form-textarea"
            placeholder="Yahan post ke baare mein likhein..."
          ></textarea>
        </div>

        {/* Image File Field */}
        <div className="mb-6">
          <label htmlFor="image-file" className="form-label">Image Upload </label>
          <input
            type="file"
            id="image-file"
            className="form-input form-file"
          />
          <p className="mt-1 text-xs text-secondary">PNG, JPG, JPEG (max 2MB).</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="form-button"
        >
          Post Upload
        </button>
      </form>


    </div>
  );
};

export default Home;