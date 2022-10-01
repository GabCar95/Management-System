import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import MaintCard from './MaintCard'
import AuthContext from '../context/AuthContext'

function MaintDash() {

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
            const { data } = await authAxios.get('https://maintmanagementsystem.herokuapp.com/api/maintenance/')
            setMaintenance(data)
            
        }

        fetchMaintenance()
        // console.log(maintenance)
    }, [])
  return (
    <div className='h-[400px] bg-white rounded-lg'>
        <h1 className='font-bold text-[#FF5722] text-3xl border-b-2 border-[#222831] inline ml-2'>Maintenance</h1>

        <div className='grid grid-cols-5 p-4'>
            {/* Order# */}
            <div>
                <h1 className='font-bold text-[#222831] text-xl'>Order #</h1>
            </div>

            {/* Date Created */}
            <div>
                <h1 className='font-bold text-[#222831] text-xl'>Date Created</h1>
            </div>

            {/* Date Complete */}
            <div>
                <h1 className='font-bold text-[#222831] text-xl'>Date Complete</h1>
            </div>

            {/* Status */}
            <div>
                <h1 className='font-bold text-[#222831] text-xl'>Status</h1>
            </div>

            {/* view */}
            <div>
                <h1> </h1>
            </div>

        </div>

        <div>
            {maintenance.map(maintenance => (
                <MaintCard key={maintenance.id} maintenance={maintenance} />
            ))}
        </div>

    </div>
  )
}

export default MaintDash