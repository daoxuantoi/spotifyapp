import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../../utils/firebase_config'
import Header from '../header/Header'
import './Login.css'
import { AuthUseContext } from '../../context/AuthContext'
import {motion} from 'framer-motion'

const Login = () => {

  const navigate = useNavigate()
    const [flagError,setFlagError] = useState(false)
    const {loginAccount} = AuthUseContext()
    const [emailLogin, setEmailLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")

    const handleLogin = async (e)=>{

        e.preventDefault()
        try {
          await loginAccount(emailLogin, passwordLogin)
          setFlagError(false)

          navigate('/')
        }catch(e){
          console.log(e)
          setFlagError(true)
        }
    }

    const user = auth.currentUser;
    console.log(user)
  return (
    <div>
      <Header></Header>
        <div className="form-container">
        <h3>To continue, log in to Spotify.</h3>
        <form className="form-join">
          {flagError && <p className="flag-err">Your Account or Password is invalid or wrong</p>}
            <div className="wrap-fields">
                <label for="email-login">Email: </label>
                <input value={emailLogin}
                onChange={(e)=>setEmailLogin(e.target.value)}
                name="email-login" id="email-login" placeholder="Email"/>
            </div> 
            <div className="wrap-fields">
                <label for="password-login">Password: </label>
                <input 
                value={passwordLogin}
                type="password"
                onChange={(e)=>setPasswordLogin(e.target.value)}
                name="password-login" id="password-login" placeholder="Password"/>
            </div>
            <div className="btn-group">
                <motion.button 
                // whileHover={{scale:0.75}}
                whileTap = {{scale: 0.75}}
                onClick={handleLogin}
                className="btn btn-login">Login</motion.button>
            </div>
        </form>
        <div className="register-nav">
        <p>Don't have account ?</p>
        <Link to="/register"
               ><motion.div
               whileTap = {{scale: 0.75}}
               className="btn btn-register">
                  Register
                </motion.div>
        </Link>
        </div>
        </div>

    </div>
  )
}

export default Login
