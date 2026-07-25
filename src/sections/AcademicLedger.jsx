import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { stages } from '../data/content'

const dotColor = {
  marigold: 'bg-marigold',
  leaf: 'bg-leaf',
  denim: 'bg-denim',
  rose: 'bg-rose',
}
const bulletColor = {
  marigold: 'before:bg-marigold',
  leaf: 'before:bg-leaf',
  denim: 'before:bg-denim',
  rose: 'before:bg-rose',
}

export default function AcademicLedger({ white = true }) {
  return (
    <section className={white ? 'bg-white' : ''} id="academics">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="The learning journey"
            title="Four stages, one continuous path of growth."
            desc="Every stage at Excellence International School uses age-appropriate methods to build the confidence and skills students carry into the next one."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="relative pt-2.5">
            <div className="relative grid md:grid-cols-4 mt-11 border-t-2 border-ink md:border-t-2">
              {stages.map((stage) => (
                <div
                  key={stage.id}
                  id={stage.id}
                  className="relative pt-7 px-0 md:px-5 border-l-2 md:border-l-0 md:border-r border-ink md:border-r-line last:border-r-0 pl-6 md:pl-5 ml-2 md:ml-0 pb-5 md:pb-0 scroll-mt-28"
                >
                  <div className={`absolute -top-[9px] left-[-9px] md:left-5 w-4 h-4 rounded-full border-[3px] border-paper md:border-white ${dotColor[stage.color]}`} />
                  <span className="font-mono text-[11px] font-bold tracking-wide uppercase text-textsoft">
                    {stage.tab}
                  </span>
                  <h3 className="text-[21px] my-2">{stage.title}</h3>
                  <p className="text-[14.5px] mb-3.5">{stage.desc}</p>
                  <ul className="flex flex-col gap-1.5">
                    {stage.points.map((p) => (
                      <li
                        key={p}
                        className={`text-[13.5px] text-textsoft pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[5px] before:h-[5px] before:rounded-full ${bulletColor[stage.color]}`}
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
