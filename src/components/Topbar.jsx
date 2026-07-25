import { school } from '../data/content'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './Icons'

export default function Topbar() {
  return (
    <div className="bg-ink text-[#DCE3EC] text-[13.5px]">
      <div className="container flex flex-wrap items-center justify-between gap-2 py-2">
        <div className="flex flex-wrap gap-5">
          <a href={school.phoneHref} className="opacity-90 hover:opacity-100 hover:text-marigold transition">
            {school.phone}
          </a>
          <a href={`mailto:${school.email}`} className="opacity-90 hover:opacity-100 hover:text-marigold transition">
            {school.email}
          </a>
        </div>
        <div className="flex gap-3.5">
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
              className="w-[26px] h-[26px] rounded-full border border-white/25 flex items-center justify-center hover:bg-marigold hover:border-marigold transition"
            >
              <Icon className="w-[13px] h-[13px] fill-current" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
