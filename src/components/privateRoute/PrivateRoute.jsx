import React from 'react'
import { AuthUseContext } from '../../context/AuthContext'
import MainContainer from '../mainContainer/MainContainer'
import {useNavigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user} = AuthUseContext()
    
    const navigate = useNavigate()

    if(!user){
        return navigate('/login')
    }
    return children
}

export default PrivateRoute
