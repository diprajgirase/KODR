import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function searchFilter(array, searchTerm) {
  if (!searchTerm) return array;
  const lowerSearch = searchTerm.toLowerCase();
  return array.filter(item => item.toLowerCase().includes(lowerSearch));
}

function App() {
  const [count, setCount] = useState(0)

  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  const filteredItems = searchFilter(items.map(item => item.title), search);

  return (
    <>
      <form action="" onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search fruits..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </form>
      <ul>
        {filteredItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App
