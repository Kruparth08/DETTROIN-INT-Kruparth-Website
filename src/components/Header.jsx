import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, school } from '../data/content'
import { ChevronDown, PhoneIcon } from './Icons'

export default function Header({ onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-line transition-shadow ${
        scrolled ? 'shadow-[0_6px_24px_-14px_rgba(22,40,61,0.35)]' : ''
      }`}
    >
      <div className="container flex items-center justify-between py-3.5">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-[46px] h-[46px] rounded-full bg-ink text-paper border-2 border-marigold flex items-center justify-center font-display font-bold text-[19px] shrink-0">
            EI
          </div>
          <div className="flex flex-col leading-tight">
            <strong className="font-display text-[19px] font-semibold text-ink">Excellence International</strong>
            <span className="font-mono text-[10.5px] tracking-widest uppercase text-textsoft">School · Aligarh</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
          <ul className="flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3.5 py-2.5 rounded-full font-semibold text-[14.5px] whitespace-nowrap transition ${
                      isActive ? 'text-marigolddark bg-marigold/15' : 'text-ink hover:bg-marigold/15 hover:text-marigolddark'
                    }`
                  }
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-[10px] h-[10px] group-hover:rotate-180 transition-transform" />}
                </NavLink>
                {link.children && (
                  <div className="absolute top-full left-0 min-w-[230px] bg-white border border-line rounded-xl p-2 shadow-soft opacity-0 invisible translate-y-1.5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block px-3 py-2.5 rounded-lg text-[14px] font-medium text-text hover:bg-paper hover:text-marigolddark"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3.5">
          <a href={school.phoneHref} className="hidden lg:flex items-center gap-2 font-mono font-bold text-[13.5px] text-ink">
            <PhoneIcon className="w-4 h-4 fill-leaf" />
            {school.phone}
          </a>
          <Link
            to="/admissions"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-[14.5px] bg-marigold text-ink hover:bg-marigolddark hover:text-white hover:-translate-y-0.5 transition shadow-none hover:shadow-[0_10px_20px_-8px_rgba(184,122,34,0.55)]"
          >
            Enquire Now
          </Link>
          <button
            onClick={onOpenMenu}
            aria-label="Open menu"
            className="lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none"
          >
            <span className="w-6 h-[2.5px] bg-ink rounded" />
            <span className="w-6 h-[2.5px] bg-ink rounded" />
            <span className="w-6 h-[2.5px] bg-ink rounded" />
          </button>
        </div>
      </div>
    </header>
  )
}
