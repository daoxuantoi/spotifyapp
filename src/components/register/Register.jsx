import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../header/Header'
import './Register.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/firebase_config';
import {motion} from 'framer-motion'
import {AuthUseContext} from '../../context/AuthContext.js'




const Register = () => {

    const {createAccount} = AuthUseContext()

    const [flagError,setFlagError] = useState(false)

    const navigate = useNavigate()
    const [emailRegister, setEmailRegister] = useState("")
    const [passwordRegister, setPasswordRegister] = useState("")

    const handleOnSubmit = (e)=>{

        // console.log("my name is toi")
        e.preventDefault()
    }

    const handleRegister = async (e)=>{

        e.preventDefault()
       
        try{
            const response = await createAccount(emailRegister,passwordRegister)

            alert("you have already registered successfull",response.user.email)
            
            const user = auth.currentUser;
            console.log(user)
            setFlagError(false)
            navigate("/")
            console.log(user)


        }catch(error){
            // alert("your email or password is not suitable !")
            setFlagError(true)
        }
        // console.log(response);
    }
  return (
    <div>
      <Header></Header>
        <div className="form-container">
        <h3>To continue, log in to Spotify.</h3>
        <form className="form-join">
          {flagError && <p className="flag-err">Your Account or Password is invalid</p>}

            <div className="wrap-fields">
                <label for="email-login">Email: </label>
                <input value={emailRegister}
                onChange={(e)=>setEmailRegister(e.target.value)}
                name="email-login" id="email-login" placeholder="Email"/>
            </div> 
            <div className="wrap-fields">
                <label for="password-login">Password: </label>
                <input 
                type="password"
                value={passwordRegister}
                onChange={(e)=>setPasswordRegister(e.target.value)}
                name="password-login" id="password-login" placeholder="Password"/>
            </div>
            <div className="btn-group">
                <motion.button 
                whileTap = {{scale: 0.75}}
                onClick={handleRegister}
                className="btn btn-login">Register</motion.button>
            </div>
        </form>

        <div className="register-nav">
        <p>You already have an account ?</p>
        <Link to="/login"
               ><motion.div
               whileTap = {{scale: 0.75}}
               className="btn btn-register">
                  Login
                </motion.div>
        </Link>
        </div>
        </div>


    </div>
  )
}

export default Register
