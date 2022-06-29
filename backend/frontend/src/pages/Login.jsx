import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

function Login() {
    let {loginUser} = useContext(AuthContext)
  return (
    <div className='h-[91vh] bg-gray-300 flex justify-center pt-[80px]'>
        <div className='w-[500px] h-[200px] bg-gray-100 rounded-md'>
            {/* id, first_name, last_name, phone, email, date_created */}
            <h1 className='font-bold text-gray-600 text-2xl text-center mt-3'>Login:</h1>
            <form onSubmit={loginUser}>
                <div className='flex grid-cols-2 p-4 justify-around mt-[20px] font-bold text-gray-600'>
                    <div className='grid'>
                        <label>Username:</label>
                        <input type='text' name='username' />

                    </div>

                    <div className='grid'>
                        <label>Password:</label>
                        <input type='password' name='password' />

                    </div>
                    
                </div>
                <button className='font-bold text-gray-600 bg-yellow-400 rounded-md py-1 px-6 inline text-center mt-2 ml-[200px]'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login