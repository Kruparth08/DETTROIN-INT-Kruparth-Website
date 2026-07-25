export default function SectionHeading({ eyebrow, title, desc, center = false, light = false, className = '' }) {
  return (
    <div className={`max-w-2xl mb-12 ${center ? 'mx-auto text-center' : ''} ${className}`}>
      <span className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{eyebrow}</span>
      <h2 className={`mt-3.5 text-[clamp(1.9rem,3.4vw,2.7rem)] font-semibold ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      {desc && <p className={`mt-4 text-[16.5px] ${light ? 'text-[#C6D0DD]' : ''}`}>{desc}</p>}
    </div>
  )
}
