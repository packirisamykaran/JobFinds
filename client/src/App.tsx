import React from 'react'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import '../src/components/styles/App.css'
import {Route, Routes, BrowserRouter as Router, } from "react-router-dom"
import Profile from './components/profile/Profile'

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<div>home page</div>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>

    </div>
  )
}
