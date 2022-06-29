import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate  } from "react-router-dom"
import AuthContext from '../context/AuthContext'

function CustCreate() {

    let {authTokens} = useContext(AuthContext)

    const authAxios = axios.create({
        headers: {
            Authorization: `Bearer ${authTokens}`
        }
    })
     // create customer
     
     const navigate = useNavigate()
     
     const [id, setId] = useState('')
     const [first_name, setFirst_name] = useState('')
     const [last_name, setLast_name] = useState('')
     const [phone, setPhone] = useState('')
     const [email, setEmail] = useState('')
     const [date_created, setDate_created] = useState('')
     
 
     function create(e) {
         e.preventDefault()
         authAxios.post('http://127.0.0.1:8000/api/customer/',{
            
             first_name: first_name,
             last_name: last_name,
             phone: phone,
             email: email,
             
         })
             .then(res => {
                 navigate('/')
                 alert('Customer Created!')
                 console.log(res.customer)
             })
     }
 
  return (
    <div className='h-[91vh] bg-gray-300 flex justify-center pt-[80px]'>
        <div className='w-[600px] h-[400px] bg-gray-100 rounded-md'>
            {/* id, first_name, last_name, phone, email, date_created */}
            <h1 className='font-bold text-gray-600 text-2xl text-center mt-3'>Create Customer:</h1>
            <form>
                <div className='flex grid-cols-2 p-2 justify-around mt-[80px] font-bold text-gray-600'>
                    <div className='grid'>                        
                        <label className='pt-4'>First Name:</label>
                        <input onChange={(e) => setFirst_name(e.target.value)} type='text' name='first_name'  value={first_name}/>

                        <label className='pt-4'>Last Name:</label>
                        <input onChange={(e) => setLast_name(e.target.value)} type='text' name='last_name' value={last_name}/>
                    </div>

                    <div className='grid'>
                        <label className='pt-4'>Phone:</label>
                        <input onChange={(e) => setPhone(e.target.value)} type='text' name='phone' value={phone}/>

                        <label className='pt-4'>Email:</label>
                        <input onChange={(e) => setEmail(e.target.value)} type='text' name='email' value={email}/>
                    </div>
                    
                </div>
                <button onClick={create} className='font-bold text-gray-600 bg-yellow-400 rounded-md py-1 px-6 inline text-center mt-2 ml-[250px]'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CustCreate