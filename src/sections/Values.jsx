import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const icons = {
  Honesty: <path d="M12 21s-8-4.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.5-8 11-8 11z" />,
  Integrity: <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />,
  Respect: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" /></>,
  Discipline: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 10h16M10 4v16" /></>,
  Compassion: <path d="M20.8 8.6c0 5.4-8.8 10.4-8.8 10.4S3.2 14 3.2 8.6a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8z" />,
  Responsibility: <path d="M12 2v20M5 8l7-6 7 6M5 8v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />,
}

export default function Values() {
  return (
    <section>
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Value-based education" title="Six pillars we build character on." center />
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(icons).map(([name, path], i) => (
            <Reveal key={name} delay={i * 60}>
              <div className="text-center p-6 rounded-2xl border border-line bg-white h-full">
                <svg viewBox="0 0 24 24" className="w-9 h-9 mx-auto mb-3.5 stroke-marigolddark fill-none stroke-[1.5]">
                  {path}
                </svg>
                <h4 className="text-[14.5px]">{name}</h4>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
