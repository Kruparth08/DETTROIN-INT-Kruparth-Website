import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { whyUs } from '../data/content'

export default function WhyUs() {
  return (
    <section id="facilities">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Why families choose us" title="Best school in Aligarh — here's the reasoning." />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="bg-white border border-line rounded-2xl p-6 h-full hover:-translate-y-1.5 hover:shadow-soft hover:border-transparent transition">
                <span className="block font-mono text-xs font-bold text-marigolddark mb-3.5">{item.num}</span>
                <h3 className="text-[18.5px] mb-2.5">{item.title}</h3>
                <p className="text-sm mb-3">{item.desc}</p>
                <ul className="space-y-1">
                  {item.points.map((p) => (
                    <li key={p} className="text-[13px] text-textsoft pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1 before:h-1 before:rounded-full before:bg-marigolddark">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
