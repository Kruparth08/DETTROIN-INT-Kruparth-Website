import { Link } from 'react-router-dom'
import { school } from '../data/content'
import { FacebookIcon, InstagramIcon, YoutubeIcon, PinIcon, PhoneIcon, MailIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-ink text-[#C6D0DD] pt-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-10 pb-14 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-[46px] h-[46px] rounded-full bg-transparent border-2 border-marigold flex items-center justify-center font-display font-bold text-[19px] text-white">
                EI
              </div>
              <div className="flex flex-col leading-tight">
                <strong className="font-display text-white text-[19px] font-semibold">Excellence International</strong>
                <span className="font-mono text-[10.5px] tracking-widest uppercase text-[#93A2B4]">School · Aligarh</span>
              </div>
            </div>
            <p className="text-[#AEBBC9] text-[14.5px] mt-4 max-w-xs">
              Committed to nurturing young minds through academic excellence, modern learning methods and holistic
              development in Aligarh, Uttar Pradesh.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                [school.facebook, FacebookIcon, 'Facebook'],
                [school.instagram, InstagramIcon, 'Instagram'],
                [school.youtube, YoutubeIcon, 'YouTube'],
              ].map(([href, Icon, label]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-[34px] h-[34px] rounded-full border border-white/25 flex items-center justify-center hover:bg-marigold transition"
                >
                  <Icon className="w-[14px] h-[14px] fill-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-mono uppercase tracking-widest text-[12.5px] text-marigold mb-4">Quick Links</h5>
            <ul className="space-y-2.5">
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['Admissions', '/admissions'],
                ['Academics', '/academics'],
                ['Contact Us', '/contact'],
              ].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="text-[14.5px] hover:text-marigold transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono uppercase tracking-widest text-[12.5px] text-marigold mb-4">Academics</h5>
            <ul className="space-y-2.5">
              {[
                ['Pre-Primary School', '/academics#pre-primary'],
                ['Primary School', '/academics#primary'],
                ['Middle School', '/academics#middle'],
                ['Daycare', '/academics#daycare'],
              ].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="text-[14.5px] hover:text-marigold transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono uppercase tracking-widest text-[12.5px] text-marigold mb-4">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex gap-2.5 text-[14px]">
                <PinIcon className="w-[17px] h-[17px] fill-marigold shrink-0 mt-0.5" />
                <span>{school.location}</span>
              </li>
              <li className="flex gap-2.5 text-[14px]">
                <PhoneIcon className="w-[17px] h-[17px] fill-marigold shrink-0 mt-0.5" />
                <span>{school.phone}</span>
              </li>
              <li className="flex gap-2.5 text-[14px]">
                <MailIcon className="w-[17px] h-[17px] fill-marigold shrink-0 mt-0.5" />
                <span>{school.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-wrap justify-between gap-2 text-[13px] text-[#8B98A8]">
          <span>© 2026 Excellence International School. All rights reserved.</span>
          <span>Ramghat Road, Aligarh, Uttar Pradesh</span>
        </div>
      </div>
    </footer>
  )
}
