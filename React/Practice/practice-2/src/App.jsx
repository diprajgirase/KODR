import React, { useState } from 'react'


const App = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }
      // console.log(formData)

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text"
          name='name'
          value={formData.name}
          placeholder='Name'
          onChange={handleChange} />

        <input type="text"
          name='email'
          value={formData.email}
          placeholder='Email'
          onChange={handleChange} />

        <input type="number"
          name='mobile'
          value={formData.mobile}
          placeholder='Mobile.No'
          onChange={handleChange} />

        <input type="submit" />
      </form>

    </div>
  )
}

export default App