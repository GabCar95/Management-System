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
         authAxios.post('https://maintmanagementsystem.herokuapp.com/api/customer/',{
            
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
    <div className='h-[91vh] bg-[#E5E5E5] flex justify-center pt-[80px]'>
        <div className='w-[600px] h-[400px] bg-white rounded-md'>
            {/* id, first_name, last_name, phone, email, date_created */}
            <h1 className='font-bold text-[#222831] text-2xl text-center mt-3'>Create Customer<span className='text-[#FF5722]'>:</span></h1>
            <form>
                <div className='flex grid-cols-2 p-2 justify-around mt-[80px] font-bold text-[#222831]'>
                    <div className='grid'>                        
                        <label className='pt-4'>First Name:</label>
                        <input className='border-b-2 border-gray-300' onChange={(e) => setFirst_name(e.target.value)} type='text' name='first_name'  value={first_name}/>

                        <label className='pt-4'>Last Name:</label>
                        <input className='border-b-2 border-gray-300' onChange={(e) => setLast_name(e.target.value)} type='text' name='last_name' value={last_name}/>
                    </div>

                    <div className='grid'>
                        <label className='pt-4'>Phone:</label>
                        <input className='border-b-2 border-gray-300' onChange={(e) => setPhone(e.target.value)} type='text' name='phone' value={phone}/>

                        <label className='pt-4'>Email:</label>
                        <input className='border-b-2 border-gray-300' onChange={(e) => setEmail(e.target.value)} type='text' name='email' value={email}/>
                    </div>
                    
                </div>
                <button onClick={create} className='font-bold text-white bg-[#393E46] rounded-md py-1 px-6 inline text-center mt-2 ml-[250px]'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CustCreate