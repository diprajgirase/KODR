import React from 'react'
import FilterBar from '../components/FilterBar'
import VideoGrid from '../components/VideoGrid'

const Home = () => {
  return (
    <div className='flex-1 overflow-y-auto'>
      <FilterBar/>
      <VideoGrid/>
    </div>
  )
}

export default Home 