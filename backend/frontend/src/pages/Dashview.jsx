import React, { useState, useEffect } from 'react'
import CustDash from '../components/CustDash'
import MaintDash from '../components/MaintDash'
import OrderDash from '../components/OrderDash'


function Dashview() {


   

  return (
    <div className='h-[100vh] bg-[#E5E5E5]'>
        {/* Order numbers */}
        <div>
            <OrderDash />
        </div>

        <div className='flex grid-cols-5'>

            {/* Customer info */}
            <div className='w-[36%] '>
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