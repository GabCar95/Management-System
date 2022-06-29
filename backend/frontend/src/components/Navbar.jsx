import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import AuthContext from '../context/AuthContext'

function Navbar() {
  let {user, logoutUser} = useContext(AuthContext)
  return (
    <div className='h-[40px] p-2 bg-gray-600 border-b-2 border-red-600 grid justify-evenly text-center text-white text-xl font-bold grid-cols-5'>
        {user && <div>Hello, {user}</div>}
        <Link to="/">Dashboard</Link>
        <Link to="/maintenance">Maintenance</Link>
        <Link to="/customer">Customer</Link>
        {user ? (<button onClick={logoutUser}>Logout</button>): (<Link to="login">Login</Link>)}
    </div>
  )
}

export default Navbar