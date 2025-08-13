import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='h-screen '>
      <Navbar />
      <div className='h-[90%] flex'>
        <div className='w-[15%] bg-blue-600'></div>
        <div className='w-[85%] bg-red-600'></div>
      </div>
    </div>
  )
}

export default Home