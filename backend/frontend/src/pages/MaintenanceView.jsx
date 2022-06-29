import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import AuthContext from '../context/AuthContext'

function MaintenanceView() {

    let {authTokens} = useContext(AuthContext)
     // maintenance
     const[maintenance, setMaintenance] = useState([])
     const authAxios = axios.create({
        headers: {
            Authorization: `Bearer ${authTokens}`
        }
    })
     

     useEffect(() => {
 
         async function fetchMaintenance(){
             const { data } = await authAxios.get('http://127.0.0.1:8000/api/maintenance/')
             setMaintenance(data)
             
         }
 
         fetchMaintenance()
         console.log(maintenance)
     }, [])
     

  return (
    <div className='h-[91vh] bg-gray-300 flex justify-center'>
        <div className='w-[1200px] h-full bg-gray-100 rounded-md'>
            {/* order, employee, status, tune, description, totalCost, paid, passInspection, truckInShop, truckOutShop */}
            {maintenance.map(maintenance => (
                <div className='w-[1200px] flex grid-cols-4 justify-around py-4 border-b-2 border-gray-300 font-semibold text-gray-800'>
                    <div>
                        <p>Order#: {maintenance.order}</p>
                        <p>Status: {maintenance.status}</p>
                    </div>

                    <div>
                        <p>Date start: {maintenance.truckInShop}</p>
                        <p>Total: {maintenance.totalCost}</p>
                    </div>

                    <div>
                        <p>Date complete: {maintenance.truckOutShop}</p>
                        <p>Paid: {maintenance.paid ? ("Yes"): ("No")}</p>
                    </div>

                    <div className='pt-4'>
                        <Link to={"/maintenance/" + maintenance.id} className='bg-yellow-400 rounded-md px-2'>View</Link>
                    </div>

                </div>
            ))}
            
        </div>
    </div>
  )
}

export default MaintenanceView