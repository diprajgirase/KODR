import React, { useContext } from 'react'
import NotesForm from './components/NotesForm'
import { MyNotes } from './Context/NotesContext'
import NotesCard from './components/NotesCard'

const App = () => {

  const { toggle, setToggle } = useContext(MyNotes)

  return (

    <div className='h-screen w-[full] bg-gray-400 p-8  ' >

      <div className='flex justify-between py-10'>
        <h1 className='text-5xl'>Notes App</h1>
        <button className='text-5xl' >Add Note</button>
      </div>

      {toggle ? <NotesForm /> : <NotesCard />}

    </div>
  )
}

export default App