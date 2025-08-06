import React, { useState } from 'react'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'


const App = () => {
  const [userData, setUserData] = useState([])

  return (
    <div className="p-5">
    <Navbar/>
    <AppRouter/>
    </div>
  )
}

export default App