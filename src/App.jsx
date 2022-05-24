import React from 'react'
import MainContainer from './components/mainContainer/MainContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/login/Login'
import Register from './components/register/Register'
import PrivateRoute from './components/privateRoute/PrivateRoute'



const App = () => {
  return (


    <BrowserRouter>
    
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<PrivateRoute><MainContainer/></PrivateRoute>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
