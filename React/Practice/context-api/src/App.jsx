import React from 'react'
import Login from './components/Login'
import Register from './components/Register'

import { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [toggle, setToggle] = useState(false);

  const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem("users")) || []
  )

  return (
    <div className='h-full w-full flex'>

      {toggle ? <Login toggle={toggle} setToggle={setToggle} userData={userData} setUserData={setUserData} /> : <Register toggle={toggle} setToggle={setToggle} userData={userData} setUserData={setUserData} />}


      {userData.map((item, index) => {
        return <Card item={item} index={index}/>
      })}

    </div>
  )
}

export default App