import React from 'react'
import { Link } from "react-router-dom"

function CustCard(props) {
    let id = props.customers.id
    
  return (
    <div className='grid grid-cols-4 justify-between p-2'>
            {/* view */}
            <div>
                <Link to={"/customer/" + id} className='bg-[#393E46] font-bold text-white rounded-md py-1 px-2'>View</Link>
            </div>

            {/* Customer last name */}
            <div>
                <h1 className='font-bold text-[#393E46] text-xl'>{props.customers.last_name}</h1>
            </div>

            {/* Customer first name */}
            <div>
                <h1 className='font-bold text-[#393E46] text-xl'>{props.customers.first_name}</h1>
            </div>

            {/* Phone */}
            <div className='mr-[-10px]'>
                <h1 className='font-bold text-[#393E46] text-xl'>{props.customers.phone}</h1>
            </div>

        </div>
  )
}

export default CustCard