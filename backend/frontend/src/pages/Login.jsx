import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

function Login() {
    let {loginUser} = useContext(AuthContext)
  return (
    <div className='h-[91vh] bg-[#E5E5E5] flex justify-center pt-[80px]'>
        <div className='w-[500px] h-[200px] bg-white rounded-md'>
            {/* id, first_name, last_name, phone, email, date_created */}
            <h1 className='font-bold text-[#222831] text-2xl text-center mt-3'>Login<span className='text-[#FF5722]'>:</span></h1>
            <form onSubmit={loginUser}>
                <div className='flex grid-cols-2 p-4 justify-around mt-[20px] font-bold text-[#393E46]'>
                    <div className='grid'>
                        <label className='text-[#222831]'>Username:</label>
                        <input className='border-b-2 border-[#222831]' type='text' name='username' />

                    </div>

                    <div className='grid'>
                        <label className='text-[#222831]'>Password:</label>
                        <input className='border-b-2 border-[#222831]' type='password' name='password' />

                    </div>
                    
                </div>
                <button className='font-bold text-white bg-[#393E46] rounded-md py-1 px-6 inline text-center mt-2 ml-[200px]'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login