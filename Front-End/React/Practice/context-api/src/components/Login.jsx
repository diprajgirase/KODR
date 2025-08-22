import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';

const Login = ({ toggle, setToggle, setUserData, userData }) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm();

  // const checkLogin = (data) => {
  //   console.log("login wala data >", data)
  //   let checkedData = userData.find((val) => val.email === data.email && val.password === data.password
  //   )
  //   console.log(checkedData)
  //   if (checkedData) {
  //     toast.success("Login Successfull")
  //   }
  //   else { toast.error("Login Failed") }
  // }

  const checkLogin = (data) => {
    console.log("loginwala",data)
    let checkedData = userData.find((val)=> val.email === data.email && val.password === data.password )
    if (checkedData) {
      toast.success("Login Successfull")
    } else { toast.error("Login Failed") }
  }


  return (
    <div className=" w-[50%] flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">Login</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(checkLogin)}>

          <input
            type="email"
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


          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out shadow-md"
          >
            Login
          </button>

        </form>
        <p className="text-center text-gray-600 mt-6">
          Dont't Have an Account {" "}
          <span onClick={() => setToggle(!toggle)} className="text-blue-500 font-semibold hover:underline cursor-pointer">
            Register
          </span>
        </p>
      </div>
    </div>

  )
}

export default Login