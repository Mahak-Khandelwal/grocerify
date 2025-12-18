import React from 'react'
import Navbar from '../navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/footer'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
