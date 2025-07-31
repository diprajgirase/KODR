import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  console.log(name, email, mobile);

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          placeholder="mobile no"
          onChange={(e) => setMobile(e.target.value)}
        />

        <input type="submit" />
      </form>
    </>
  )
}

export default App;
