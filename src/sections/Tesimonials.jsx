import { useEffect, useRef, useState } from 'react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { testimonials } from '../data/content'

export default function Testimonials({ white = true }) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const goTo = (i) => setCurrent((i + testimonials.length) % testimonials.length)

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6000)
    return () => clearInterval(timerRef.current)
  }, [])

  const pause = () => clearInterval(timerRef.current)
  const resume = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6000)
  }

  return (
    <section className={white ? 'bg-white' : ''} id="testimonials">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="What parents say" title="Real words from our school community." center />
        </Reveal>

        <Reveal delay={100}>
          <div className="relative max-w-3xl mx-auto" onMouseEnter={pause} onMouseLeave={resume}>
            <button
              onClick={() => goTo(current - 1)}
              aria-label="Previous testimonial"
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-14 w-11 h-11 rounded-full bg-white border border-line items-center justify-center hover:bg-marigold transition"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4"><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div key={t.name} className="min-w-full p-1.5">
                    <div className="bg-white border border-line rounded-[20px] p-10 text-center">
                      <div className="w-[52px] h-[52px] rounded-full bg-marigold text-ink flex items-center justify-center font-display font-bold text-lg mx-auto">
                        {t.initials}
                      </div>
                      <p className="font-display italic text-[19px] font-medium text-ink leading-relaxed mt-4">
                        "{t.quote}"
                      </p>
                      <div className="mt-5 font-bold text-ink text-[15px]">{t.name}</div>
                      <div className="text-[13px] text-textsoft mt-0.5">{t.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => goTo(current + 1)}
              aria-label="Next testimonial"
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-14 w-11 h-11 rounded-full bg-white border border-line items-center justify-center hover:bg-marigold transition"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
            </button>

            <div className="flex justify-center gap-2.5 mt-6">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-[9px] h-[9px] rounded-full transition ${
                    i === current ? 'bg-marigolddark scale-125' : 'bg-line'
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
