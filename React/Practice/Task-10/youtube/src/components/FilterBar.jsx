import React from 'react'

const FilterBar = () => {

 const filters = [
  "All",
  "Podcasts",
  "Music",
  "Self-confidence",
  "AI",
  "Motivation",
  "Study Skills",
  "Reptiles",
  "Technology",
  "Gaming",
  "Travel",
  "Health",
  "Science",
  "Finance"
];


  return (
    <div style={{ backgroundColor: "#0F0F0F" }} className="flex gap-3 overflow-x-auto whitespace-nowrap p-3 text-white scrollbar-hide">
      {filters.map((item, index) => (
        <button key={index} className="px-4 py-1 bg-gray-800 rounded hover:bg-gray-700 transition whitespace-nowrap">{item}</button>
      ))}
    </div>
  )
}

export default FilterBar