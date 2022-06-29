import React from 'react'
import { Link } from "react-router-dom"

function MaintCard(props) {
    let id = props.maintenance.id
  return (
    <div className='grid grid-cols-5 justify-between p-2'>
            {/* Order# */}
            <div>
                <h1 className='font-bold text-gray-600 text-xl'>{id}</h1>
            </div>

            {/* Date Created */}
            <div>
                <h1 className='font-bold text-gray-600 text-xl'>{props.maintenance.truckInShop}</h1>
            </div>

            {/* Date Complete */}
            <div>
                <h1 className='font-bold text-gray-600 text-xl'>{props.maintenance.truckOutShop}</h1>
            </div>

            {/* Status */}
            <div>
                <h1 className='font-bold text-gray-600 text-xl'>{props.maintenance.status}</h1>
            </div>

            {/* view */}
            <div>
                <Link to={"/maintenance/" + id} className='bg-yellow-400 font-bold text-gray-600 rounded-md px-2'>Update</Link>
            </div>

        </div>
  )
}

export default MaintCard