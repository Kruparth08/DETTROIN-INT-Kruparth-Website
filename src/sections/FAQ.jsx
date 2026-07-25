import { useState } from 'react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { faqs } from '../data/content'

export default function FAQ({ white = true }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className={white ? 'bg-white' : ''} id="faq">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Frequently asked" title="Questions parents usually ask us." center />
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-3xl mx-auto">
            {faqs.map((item, i) => {
              const open = openIndex === i
              return (
                <div key={item.q} className="border-b border-line">
                  <button
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="w-full flex justify-between items-center gap-5 py-5 px-1 text-left"
                  >
                    <span className="font-display text-lg font-medium text-ink">{item.q}</span>
                    <span
                      className={`relative w-[26px] h-[26px] rounded-full border-[1.5px] shrink-0 transition-colors ${
                        open ? 'bg-marigold border-marigold' : 'border-ink'
                      }`}
                    >
                      <span
                        className={`absolute top-1/2 left-1.5 right-1.5 h-[1.5px] -translate-y-1/2 ${
                          open ? 'bg-ink' : 'bg-ink'
                        }`}
                      />
                      <span
                        className={`absolute left-1/2 top-1.5 bottom-1.5 w-[1.5px] -translate-x-1/2 bg-ink transition-transform ${
                          open ? 'rotate-90 opacity-0' : ''
                        }`}
                      />
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: open ? '200px' : '0px' }}
                  >
                    <p className="px-1 pb-5 text-[15px] max-w-xl">{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
