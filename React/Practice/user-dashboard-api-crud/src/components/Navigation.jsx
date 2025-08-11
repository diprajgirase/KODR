import React from 'react'
import { NavLink } from 'react-router'

const Navigation = () => {
  return (
    <div className='flex flex-col gap-2 text-2xl p-4 w-[15%]'>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `p-2 rounded ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) =>
          `p-2 rounded ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`
        }
      >
        Users
      </NavLink>
      <NavLink
        to="/addUser"
        className={({ isActive }) =>
          `p-2 rounded ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`
        }
      >
        Add User
      </NavLink>
    </div>
  )
}

export default Navigation
