import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  // Optional: Just to check live updates in console
  console.log(formData);

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit (optional)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can also add validation or API logic here
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="number"
          name="mobile"
          placeholder="Mobile No"
          value={formData.mobile}
          onChange={handleChange}
        />

        <input type="submit" />
      </form>
    </>
  );
}

export default App;
