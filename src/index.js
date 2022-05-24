import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import AuthContext from './context/AuthContext'
import './index.css'

const container = document.querySelector("#root")
const root = ReactDom.createRoot(container)
root.render(
    <AuthContext>
        <App />
    </AuthContext>
)