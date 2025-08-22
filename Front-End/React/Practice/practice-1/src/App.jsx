import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  console.log(name, email, mobile)

  return (
    <div>
      <form action="">
        <input type="text" placeholder='Name'
          onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder='Mob No'
          onChange={(e) => setMobile(e.target.value)} />
        <input type="text" placeholder='Email'
          onChange={(e) => setEmail(e.target.value)} />
      </form>
    </div>
  )
}

export default App