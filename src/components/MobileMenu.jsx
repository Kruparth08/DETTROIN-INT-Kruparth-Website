import { Link } from 'react-router-dom'
import { navLinks } from '../data/content'

export default function MobileMenu({ open, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-ink/50 z-40 transition-opacity ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[min(340px,86vw)] bg-ink text-paper p-6 overflow-y-auto transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="ml-auto flex w-[38px] h-[38px] rounded-full border border-white/30 text-paper items-center justify-center text-lg"
        >
          ×
        </button>
        <ul className="mt-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                onClick={onClose}
                className="block py-3 font-semibold text-[16.5px] border-b border-white/10"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      onClick={onClose}
                      className="block py-2 text-[14.5px] font-medium text-[#C6D0DD]"
                    >
                      — {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
