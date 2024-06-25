import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from './components/Home/Home'

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer />
    </>
  )
}
//// outlet upr aur nichy waly components ko wesy ka wesy hi rakhy ga lekin in components k ander aur bahir changes kr de ga

export default Layout
