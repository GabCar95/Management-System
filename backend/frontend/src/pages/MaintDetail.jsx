import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams, useNavigate  } from "react-router-dom"
import AuthContext from '../context/AuthContext'

function MaintDetail() {

    let {authTokens} = useContext(AuthContext)

    const authAxios = axios.create({
        headers: {
            Authorization: `Bearer ${authTokens}`
        }
    })

    // maintenance
    const maintenance_id = useParams()
    const navigate = useNavigate()
    
    const [id, setId] = useState('')
    const [status, setStatus] = useState('')
    const [tune, setTune] = useState('')
    const [description, setDescription] = useState('')
    const [totalCost, setTotalCost] = useState('')
    const [paid, setPaid] = useState('')
    const [passInspection, setPassInspection] = useState('')
    const [truckInShop, setTruckInShop] = useState('')
    const [truckOutShop, setTruckOutShop] = useState('')
    const [employee, setEmployee] = useState('')
    const [order, setOrder] = useState('')
    

    useEffect(() => {

        async function fetchMaintenance(){
            const { data } = await authAxios.get(`http://127.0.0.1:8000/api/maintenance/${maintenance_id.id}`)
            setId(data.id)
            setStatus(data.status)
            setTune(data.tune)
            setDescription(data.description)
            setTotalCost(data.totalCost)
            setPaid(data.paid)
            setPassInspection(data.passInspection)
            setTruckInShop(data.truckInShop)
            setTruckOutShop(data.truckOutShop)
            setEmployee(data.employee)
            setOrder(data.order)
            
        }

        fetchMaintenance()
        // console.log(maintenance)
    }, [])

    function update(e) {
        e.preventDefault()
        authAxios.put(`http://127.0.0.1:8000/api/maintenance/${maintenance_id.id}`,{
           
            status: status,
            tune: tune,
            description: description,
            totalCost: totalCost,
            paid: paid,
            passInspection: passInspection,
            truckInShop: truckInShop,
            truckOutShop: truckOutShop,
            employee: employee,
            order: order,
            
        })
            .then(res => {
                navigate('/')
                alert('Update Successful!')
                console.log(res.maintenance)
            })
    }


  return (
    <div className='h-[91vh] bg-gray-300 flex justify-center pt-[80px]'>
        <div className='w-[600px] h-[500px] bg-gray-200 rounded-md'>
            {/* order, employee, status, tune, description, totalCost, paid, passInspection, truckInShop, truckOutShop */}
            <h1 className='font-bold text-gray-600 text-2xl text-center mt-3'>Order#: {order}</h1>
            <form>
                <div className='flex grid-cols-2 p-4 justify-around mt-[80px] font-bold text-gray-600'>
                    {/* left col */}
                    <div className='grid'>
                        <div>
                            <label>Status: </label>
                            <select onChange={(e) => setStatus(e.target.value)} name="status" id="status">
                                <option value={status}>{status}</option>
                                <option value=" ">   </option>
                                <option value="Pending">Pending</option>
                                <option value="Working">Working</option>
                                <option value="Waiting Pickup">Waiting Pickup</option>
                                <option value="Complete">Complete</option>
                            </select>
                        </div>
                    
                        <div className='pt-4'>
                            <label>Tune: </label>
                            {tune ? (<input type='checkbox' name='tune' checked/>): (<input type='checkbox' name='tune'/>)}
                            
                        </div>

                        <div className='pt-4'>
                            <label>In Shop Date: </label>
                            <input onChange={(e) => setTruckInShop(e.target.value)} type='date' name='truckInShop' value={truckInShop}/>
                        </div>

                        <div className='pt-4'>
                            <label>Out Shop Date: </label>
                            <input onChange={(e) => setTruckOutShop(e.target.value)} type='date' name='truckOutShop' value={truckOutShop}/>
                        </div>
                        
                        <div className='pt-4'>
                            <label>Employee: </label>
                            <input onChange={(e) => setEmployee(e.target.value)} type='text' name='employee' value={employee}/>
                        </div>
                    </div>
                    {/* right col */}
                    <div className='grid'>

                        <div>
                            <label className='pt-4'>Total: </label>
                            <input onChange={(e) => setTotalCost(e.target.value)} type='text' name='totalCost' value={totalCost}/>
                        </div>

                        <div className='pt-4'>
                            <label>Pass Inspection: </label>
                            {passInspection ? (<input type='checkbox' name='passInspection' checked/>): (<input type='checkbox' name='passInspection'/>)}

                            <label className='pl-2'>Paid: </label>
                            {paid ? (<input type='checkbox' name='paid' checked/>): (<input type='checkbox' name='paid'/>)}
                        </div>
                        
                        <label className='pt-4'>Description: </label>
                        <textarea onChange={(e) => setDescription(e.target.value)} name="desciption" rows="4" cols="10" value={description} />
                        
                    </div>
                    
                </div>
                <button onClick={update} className='font-bold text-gray-600 bg-yellow-400 rounded-md py-1 px-6 inline text-center mt-2 ml-[250px]'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default MaintDetail