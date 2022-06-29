import React, { useState, useEffect } from 'react'
import CustDash from '../components/CustDash'
import MaintDash from '../components/MaintDash'
import OrderDash from '../components/OrderDash'


function Dashview() {


   

  return (
    <div className='h-[91vh] bg-gray-300'>
        {/* Order numbers */}
        <div>
            <OrderDash />
        </div>

        <div className='flex grid-cols-5'>

            {/* Customer info */}
            <div className='w-[33%] pr-2'>
                <CustDash />
            </div>

            {/* Maintenance */}
            <div className='col-start-3 w-[60%] ml-[160px]'>
                <MaintDash />
            </div>

        </div>

    </div>
  )
}

export default Dashview