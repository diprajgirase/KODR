import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Register = ({ toggle, setToggle, setUserData, userData  }) => {
const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const formHandler = (data) => {

   let updatedUsers = ([ ...userData, data ])
    setUserData(updatedUsers)
   localStorage.setItem("users", JSON.stringify(updatedUsers))
    
     reset();
  }

  // const formHandler = (data) => {
   
  //   setUserData([ ...userData, data ])
    
  //    reset();
  // }
  // console.log("Registered data->",userData)

  return (
    <div className="w-[50%] flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-md">

        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">Register</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(formHandler)} >
          <input
            type="text"
            placeholder="Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("username", { required: true })}
          />

          <input
            type="text"
            placeholder="Email"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("email", { required: true })}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("password", { required: true })}
          />

          <input
            type="number"
            placeholder="Mobile No"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("mobileNo", { required: true })}
          />

          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out shadow-md"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <span onClick={() => setToggle(!toggle)} className="text-blue-500 font-semibold hover:underline cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>

  )
}

export default Register