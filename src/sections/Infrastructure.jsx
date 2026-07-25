import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { infrastructure } from '../data/content'

export default function Infrastructure() {
  return (
    <section>
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Modern infrastructure"
            title="A campus built to support how children actually learn."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {infrastructure.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="bg-ink text-white rounded-2xl p-6 relative overflow-hidden h-full">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[radial-gradient(circle,rgba(226,155,59,0.35),transparent_70%)]" />
                <span className="relative font-mono text-xs font-bold text-marigold">{item.tag}</span>
                <h3 className="relative !text-white text-[17.5px] mt-2 mb-2">{item.title}</h3>
                <p className="relative !text-[#C6D0DD] text-[13.5px]">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
