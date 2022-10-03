import React from 'react'
import Url from './components/Url'
import Register from './screens/Register'
import Login from './screens/Login'
import { Route, Routes } from 'react-router-dom'




function App() {
  return (
      <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/url" element={<Url />} />
         
       
        
      </Routes>
      </div>
  )
}

export default App

