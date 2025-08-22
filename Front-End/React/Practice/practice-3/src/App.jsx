import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const [submittedData, setSubmittedData] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); 
    console.log("Form submitted:", formData);
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
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="mobile"
          placeholder="Mobile No"
          value={formData.mobile}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>

      {submittedData && (
        <div>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Mobile:</strong> {submittedData.mobile}</p>
        </div>
      )}
    </>
  );
}

export default App;
