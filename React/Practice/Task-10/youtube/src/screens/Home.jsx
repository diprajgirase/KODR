import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'
import FilterBar from '../components/FilterBar'
import VideoGrid from '../components/VideoGrid'


const Home = () => {
  return (
    <div className='h-screen '>
      <Navbar />
      <div className='h-[90%] flex'>
        <div className='w-[14%] overflow-hidden '>
          <Sidebar />
        </div>
        <div className='w-[86%] bg-red-600'>
          <FilterBar/>
          <VideoGrid/>
        </div>
      </div>
    </div>
  )
}

export default Home