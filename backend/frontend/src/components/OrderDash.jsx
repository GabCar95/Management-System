import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import AuthContext from '../context/AuthContext'

function OrderDash() {

  let {authTokens} = useContext(AuthContext)
  // orders
  const[orders, setOrders] = useState([])
  const authAxios = axios.create({
    headers: {
        Authorization: `Bearer ${authTokens}`
    }
})

  useEffect(() => {

      async function fetchOrders(){
          const { data } = await authAxios.get('https://maintmanagementsystem.herokuapp.com/api/maintenance/')
          setOrders(data)
          
      }

      fetchOrders()

      
  }, [])

  let numOrders = orders.length

  let numComplete = checkComplete()

  function checkComplete(){
    let total = 0
    for (let i = 0; i < numOrders; i++){
      
      if(orders[i]['status'] == 'Complete'){
        total++
      }
    }
    return total
  }

  let numActive = (numOrders - numComplete)


  

  return (
    <div className='flex grid-cols-3 justify-around py-[60px]'>

        <div className='h-[150px] w-[300px] bg-[#393E46] text-center border-2 border-[#222831] rounded-xl py-8'>
            <h1 className='font-bold text-white text-3xl'>Active Orders</h1>
            <h2 className='font-bold text-3xl text-white py-2'>{numActive}</h2>
        </div>

        <div className='h-[150px] w-[300px] bg-[#393E46] text-center border-2 border-[#222831] rounded-xl py-8'>
            <h1 className='font-bold text-white text-3xl'>Completed Orders</h1>
            <h2 className='font-bold text-3xl text-white py-2'>{numComplete}</h2>
        </div>

        <div className='h-[150px] w-[300px] bg-[#393E46] text-center border-2 border-[#222831] rounded-xl py-8'>
            <h1 className='font-bold text-white text-3xl'>Total Orders</h1>
            <h2 className='font-bold text-3xl text-white py-2'>{numOrders}</h2>
        </div>

    </div>
  )
}

export default OrderDash