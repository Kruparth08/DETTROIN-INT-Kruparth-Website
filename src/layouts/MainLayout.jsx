import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from "../components/Header"
import MobileMenu from "../components/MobileMenu"
import Topbar from "../components/Topbar"
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButton'

const MainLayout = () => {
    const [menuOpen, setMenuOpen] = useState(false)
      const { pathname, hash } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return (
    <div>
        <Topbar />
        <Header onOpenMenu={() => setMenuOpen(true)} />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        <Outlet />
        <Footer />
        <FloatingButtons />
    </div>
  )
}

export default MainLayout
