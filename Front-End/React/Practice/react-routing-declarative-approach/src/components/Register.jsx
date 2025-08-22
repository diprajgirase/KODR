import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Register = ({ userData, setUserData }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [submittedData, setsubmittedData] = useState([])

    const formHandle = (e) => {

        setUserData((prevData) => [...prevData, e])
        reset()
        console.log(e)
    }
    return (
        <div className=" text-center w-[30%] flex flex-col gap-4">
            <h1>Register</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(formHandle)} >
                <input className="border p-2 2px rounded"
                    type="text"
                    placeholder="Name"
                    {...register('name', { required: true })} />
                <input className="border p-2 2px rounded"
                    type="email"
                    placeholder="Email"
                    {...register('email', { required: true })} />
                <input className="border p-2 2px rounded"
                    type="number"
                    placeholder="Mobile-No"
                    {...register('mobile', { required: true })} />
                <input className="border p-2 2px rounded"
                    type="password"
                    placeholder='Password'
                    {...register("password", { required: true })} />

                <input className=" bg-blue-500 rounded text-white p-2" type="submit" value={"Register"} />

                <p>Already have an Account <span className="text-blue-600">Login</span></p>
            </form>

{submittedData.length > 0 && (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Submitted Data</h1>

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {submittedData.map((user, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition"
        >
          <p className="text-lg font-semibold">
            Name: <span className="font-normal">{value.name}</span>
          </p>
          <p className="text-lg font-semibold">
            Email: <span className="font-normal">{value.email}</span>
          </p>
        </div>
      ))}
    </div>
  </div>
)}




        </div>
    )
}

export default Register