import { useEffect, useState } from 'react'
import Header from "../components/Header"
import MobileMenu from "../components/MobileMenu"
import Topbar from "../components/Topbar"
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
      const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
        <Topbar />
        <Header onOpenMenu={() => setMenuOpen(true)} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout
