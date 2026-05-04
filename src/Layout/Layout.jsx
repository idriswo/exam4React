import  { memo } from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

const Layout = memo(() => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
})

export default Layout