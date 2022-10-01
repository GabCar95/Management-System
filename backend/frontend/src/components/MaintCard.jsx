import React from 'react'
import { Link } from "react-router-dom"

function MaintCard(props) {
    let id = props.maintenance.id
  return (
    <div className='grid grid-cols-5 justify-between p-2'>
            {/* Order# */}
            <div>
                <h1 className='font-bold text-[#222831] text-xl'>{id}</h1>
            </div>

            {/* Date Created */}
            <div>
                <h1 className='font-bold text-[#393E46] text-xl'>{props.maintenance.truckInShop}</h1>
            </div>

            {/* Date Complete */}
            <div>
                <h1 className='font-bold text-[#393E46] text-xl'>{props.maintenance.truckOutShop}</h1>
            </div>

            {/* Status */}
            <div>
                <h1 className='font-bold text-[#393E46] text-xl'>{props.maintenance.status}</h1>
            </div>

            {/* view */}
            <div>
                <Link to={"/maintenance/" + id} className='bg-[#393E46] font-bold text-white rounded-md py-1 px-2'>Update</Link>
            </div>

        </div>
  )
}

export default MaintCard