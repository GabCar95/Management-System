import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import CustCard from './CustCard'
import AuthContext from '../context/AuthContext'

function CustDash() {

    let {authTokens} = useContext(AuthContext)
        // customer
    const[customers, setCustomers] = useState([])
    const authAxios = axios.create({
        headers: {
            Authorization: `Bearer ${authTokens}`
        }
    })


    useEffect(() => {

        async function fetchCustomers(){
            const { data } = await authAxios.get('https://maintmanagementsystem.herokuapp.com/api/customer/')
            setCustomers(data)
            
        }

        fetchCustomers()
        // console.log(customers)
    }, [])
    
  return (
    <div className='h-[400px] bg-white rounded-lg px-2'>
        <h1 className='font-bold text-[#FF5722] text-3xl border-b-2 border-[#222831] inline'>Customers</h1>
        <Link to="/customer/create" className='font-bold text-white bg-[#393E46] rounded-md py-1 px-6 ml-[25%] inline text-center'>Create Customer</Link>

        <div className='flex grid-cols-3 justify-between p-2'>
            {/* view */}
            <div>
                <h1> </h1>
            </div>

            {/* Customer */}
            <div>
                <h1 className='font-bold text-[#222831] text-xl'>Customer</h1>
            </div>

            {/* Phone */}
            <div>
                <h1 className='font-bold text-[#222831] text-xl mr-10'>Phone</h1>
            </div>

        </div>
           
        <div className='mr-1'>
            {customers.map(customers => (
                <CustCard key={customers.id} customers={customers} />
            ))}
        </div>
    </div>
  )
}

export default CustDash