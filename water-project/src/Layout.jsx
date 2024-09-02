import React from 'react'
import Header from './components/Headers/Header'
import Footer from './components/Footers/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
