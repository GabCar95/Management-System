import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {

    
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')): null)
    let [user, setUser] = useState(()=> localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')): null)

    let navigate = useNavigate()

    let loginUser = async(e)=> {
        e.preventDefault()
        let data = await axios.post('https://maintmanagementsystem.herokuapp.com/api/users/login/', {
            username: e.target.username.value,
            password: e.target.password.value,

        })
        if(data.status === 200){
            setAuthTokens(data.data.access)
            setUser(data.data.username)
            localStorage.setItem('authTokens', JSON.stringify(data.data.access) )
            localStorage.setItem('user', JSON.stringify(data.data.username) )
            navigate('/')

        }else{
            alert('Something went wrong!')
        }
        
    
    }


    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        localStorage.removeItem('user')
        navigate('/login')
    }

    let contextData = {
        authTokens:authTokens,
        user:user,


        loginUser:loginUser,
        logoutUser:logoutUser,
    }  

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}