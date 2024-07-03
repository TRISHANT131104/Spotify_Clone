import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './routes/Login'
import Signup from './routes/Signup'
import Home from './routes/Home'

function App() {
  return (
    <>
      <div className='h-screen w-screen font-poppins'>
      <Router>
        <Routes>
          <Route path='/' element={<div>Hello</div>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
      </div>
    </>
  )
}

export default App
