import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import AuthContext from '../context/AuthContext'

function CustomerView() {

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
            const { data } = await authAxios.get('http://127.0.0.1:8000/api/customer/')
            setCustomers(data)
            
        }

        fetchCustomers()
        // console.log(customers)
    }, [])

  return (
    <div className='h-[91vh] bg-gray-300 flex justify-center'>
        <div className='w-[1200px] h-full bg-gray-100 rounded-md'>
            {/* id, first_name, last_name, phone, email, date_created */}
            {customers.map(customer => (
                <div className='w-[1200px] flex grid-cols-4 justify-around py-4 border-b-2 border-gray-300 font-semibold text-gray-800'>
                    <div>
                        <p>ID#: {customer.id}</p>
                        <p>Customer since: {customer.date_created}</p>
                    </div>

                    <div>
                        <p>Fname: {customer.first_name}</p>
                        <p>Lname: {customer.last_name}</p>
                    </div>

                    <div>
                        <p>Phone#: {customer.phone}</p>
                        <p>Email: {customer.email}</p>
                    </div>

                    <div className='pt-4'>
                        <Link to={"/customer/" + customer.id} className='bg-yellow-400 rounded-md px-2'>View</Link>
                    </div>

                </div>
            ))}
            
        </div>
    </div>
  )
}

export default CustomerView