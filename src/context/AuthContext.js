import { createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged
,signOut } from 'firebase/auth'
import {useContext, useState, createContext, useEffect} from 'react'
import { auth } from '../utils/firebase_config'


const AuthCreateContext = createContext()

const AuthContext = ({children})=>{

    const [user, setUser] = useState({})

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const loginAccount = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOut = ()=>{
        console.log("da sign out")
        // alert("already signout")
        auth.signOut()
    }


    console.log(user, " this is user")
    useEffect(() => {
        // console.log(auth.currentUser)
        const unSubcribe = onAuthStateChanged(auth, user=>{
            console.log("onAuthStateChanged call now")
            setUser(user)
        })
        console.log("this is useEffect")


        return ()=>{
            unSubcribe();
            console.log("da unsubcribe")
        }
    },[]
    
    )
    return (<AuthCreateContext.Provider value={{createAccount,loginAccount,setUser,user,signOut}}>
            {children}
        </AuthCreateContext.Provider>)
    
}

export const AuthUseContext = () =>  useContext(AuthCreateContext)
export default AuthContext;