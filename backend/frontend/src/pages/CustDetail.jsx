import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams, useNavigate  } from "react-router-dom"
import AuthContext from '../context/AuthContext'

function CustDetail({match}) {

    let {authTokens} = useContext(AuthContext)

    const authAxios = axios.create({
        headers: {
            Authorization: `Bearer ${authTokens}`
        }
    })

    // customer
    const customer_id = useParams()
    const navigate = useNavigate()
    
    const [id, setId] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [date_created, setDate_created] = useState('')
    

    useEffect(() => {

        async function fetchCustomer(){
            const { data } = await authAxios.get(`https://maintmanagementsystem.herokuapp.com/api/customer/${customer_id.id}`)
            setId(data.id)
            setFirst_name(data.first_name)
            setLast_name(data.last_name)
            setPhone(data.phone)
            setEmail(data.email)
            setDate_created(data.date_created)
            
        }

        fetchCustomer()
        // console.log(customer['date_created'])
    }, [])

    function update(e) {
        e.preventDefault()
        authAxios.put(`https://maintmanagementsystem.herokuapp.com/api/customer/${customer_id.id}`,{
           
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            email: email,
            
        })
            .then(res => {
                navigate('/')
                alert('Update Successful!')
                console.log(res.customer)
            })
    }


  return (
    <div className='h-[91vh] bg-[#E5E5E5] flex justify-center pt-[80px]'>
        <div className='w-[600px] h-[400px] bg-white rounded-md'>
            {/* id, first_name, last_name, phone, email, date_created */}
            <h1 className='font-bold text-[#222831] text-2xl text-center mt-3'>Customer information<span className='text-[#FF5722]'>:</span></h1>
            <form>
                <div className='flex grid-cols-2 p-4 justify-around mt-[80px] font-bold text-[#222831]'>
                    <div className='grid'>
                        <label>Customer ID:</label>
                        <input className='border-b-2 border-gray-300' type='text' id='id' placeholder={id}/>
                    
                        <label className='pt-4'>First Name:</label>
                        <input className='border-b-2 border-gray-300' onChange={(e) => setFirst_name(e.target.value)} type='text' id='first_name' value={first_name}/>

                        <label className='pt-4'>Last Name:</label>
                        <input className='border-b-2 border-gray-300' onChange={(e) => setLast_name(e.target.value)} type='text' id='last_name' value={last_name}/>
                    </div>

                    <div className='grid'>
                        <label>Phone:</label>
                        <input className='border-b-2 border-gray-300' onChange={(e) => setPhone(e.target.value)} type='text' id='phone' value={phone}/>

                        <label className='pt-4'>Email:</label>
                        <input className='border-b-2 border-gray-300' onChange={(e) => setEmail(e.target.value)} type='text' id='email' value={email}/>

                        <label className='pt-4'>Create Date:</label>
                        <input className='border-b-2 border-gray-300'  type='date' id='date_created' value={date_created}/>
                    </div>
                    
                </div>
            <button onClick={update} className='font-bold text-white bg-[#393E46] rounded-md py-1 px-6 inline text-center mt-2 ml-[250px]'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default CustDetail