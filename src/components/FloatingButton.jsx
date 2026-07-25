import { useEffect, useState } from 'react'
import { school } from '../data/content'
import { PhoneIcon, WhatsappIcon } from './Icons'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col gap-3 items-end">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`w-[54px] h-[54px] rounded-full bg-white border border-line flex items-center justify-center shadow-soft transition ${
          showTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        } hover:-translate-y-1`}
      >
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]">
          <path d="M12 5l-7 7M12 5l7 7M12 5v14" stroke="#16283D" strokeWidth="2" fill="none" />
        </svg>
      </button>
      <a
        href={school.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-[54px] h-[54px] rounded-full bg-[#3CA757] flex items-center justify-center shadow-soft hover:-translate-y-1 transition"
      >
        <WhatsappIcon className="w-6 h-6 fill-white" />
      </a>
      <a
        href={school.phoneHref}
        aria-label="Call the school"
        className="w-[54px] h-[54px] rounded-full bg-leaf flex items-center justify-center shadow-soft hover:-translate-y-1 transition"
      >
        <PhoneIcon className="w-6 h-6 fill-white" />
      </a>
    </div>
  )
}
