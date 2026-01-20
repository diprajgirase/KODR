import React, { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'


const App = () => {
  const users =[
    {
      "name": "Rohit Sharma",
      "city": "Mumbai",
      "age": 32,
      "profession": "Software Engineer"
    },
    {
      "name": "Neha Kapoor",
      "city": "Delhi",
      "age": 28,
      "profession": "Graphic Designer"
    },
    {
      "name": "Amit Patel",
      "city": "Ahmedabad",
      "age": 40,
      "profession": "Business Analyst"
    },
    {
      "name": "Priya Nair",
      "city": "Bangalore",
      "age": 35,
      "profession": "Data Scientist"
    },
    {
      "name": "Rahul Verma",
      "city": "Chennai",
      "age": 30,
      "profession": "Marketing Manager"
    }
  ]
  
    // let [username, setUsername] = useState('')

    // const submitHandler = (e)=>{
    //     e.preventDefault()
    //     console.log("Submitted")

    //     setUsername('')

     
    return (
        <>
        {users.map(function(elem,idx){
          return <Card key={idx} name={elem.name} age={elem.age} city={elem.city} profession={elem.profession} />
        })}
          {/* <Card user="Dipraj" age='50' city="shirpur"/> */}
        </>
        // <div>
        //     {/* <  h1 className='text-xl font-semibold'>Number Is {num}</h1>
        //     <button className='px-4 py-3 text-xl font-semibold' onClick={() =>
        //         setNum(num + 10)
        //     }>Increment A</button>
        //     <button className='px-4 py-3 text-xl font-semibold' onClick={() =>
        //         setNum(num - 10)
        //     }>Decrement A</button> */}

        //     {/* <form onSubmit={(e) => {
        //         submitHandler(e)
        //     }} >
        //         <input
        //             value={username}
        //             onChange={(hey) => {
        //                 setUsername(hey.target.value)
        //             }}
        //             className='px-4 py-3 bg-stone-50 m-5'
        //             type="text"
        //             placeholder='Enter Your Name' />
        //         <button className='px-4 py-3 m-5 text-xl font-semibold rounded bg-emerald-700' >Submit</button>
        //     </form> */}
        // </div>

    )
}

export default App