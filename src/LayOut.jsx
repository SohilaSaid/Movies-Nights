import React from 'react'
import NavBar from './pages/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './pages/Footer'

export default function LayOut() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
    
  )
}
