import React from 'react'
import Navbar from './components/Navbar'
import Routing from './utils/Routing'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>

      <Navbar />

      <Routing />
      
      <Footer/>
    </div>
  )
}

export default App