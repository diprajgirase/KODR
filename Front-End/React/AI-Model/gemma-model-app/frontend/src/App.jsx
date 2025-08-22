import React, { useState } from 'react';
import { Send } from 'lucide-react'; // A great icon library for React

const App = () => {

  const [query, setQuery] = useState("")

  const handleSent = () => {
       console.log(query);
       
    setQuery("")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* The new text above the search bar */}
      <h1 className="mb-4 text-3xl font-semibold text-gray-800">
        Hey, how can I help you?
      </h1>

      <div className="flex items-center w-full max-w-md p-4 bg-white rounded-full shadow-lg">
        {/* The search input field */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 text-gray-700 bg-transparent outline-none"
        />

        {/* The send button */}
        <button
          className="p-2 text-white bg-blue-500 rounded-full shadow-md transition-transform transform hover:scale-105 active:scale-95"
          onClick={handleSent}
          disabled={!query.trim()} // Disable the button if the input is empty
        >
          {/* An icon for the send button */}
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default App;
