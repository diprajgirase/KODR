import React, { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'


const App = () => {
  const [userData, setUserData] = useState([])

  return (
    <div className="p-5">
      <h1>Users</h1>
      <Register userData={userData} setUserData={setUserData} />
      <Login />
    </div>
  )
}

export default App