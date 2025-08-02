import React from 'react'

const Login = () => {
    return (
        <div className=" text-center w-[30%] flex flex-col gap-4">
            <h1>Login</h1>
            <form className="flex flex-col gap-4"  >
                <input className="border p-2 2px rounded" type="text"
                    placeholder="Name" />
                <input className="border p-2 2px rounded" type="password"
                    placeholder="Password" />

                <input className=" bg-blue-500 rounded text-white p-2" type="submit" value={"Login"} />

                <p>Don't have an Account <span className="text-blue-600">Register</span></p>

            </form>

        </div>
    )
}

export default Login