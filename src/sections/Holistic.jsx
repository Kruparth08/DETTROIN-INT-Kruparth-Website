import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { holistic } from '../data/content'

const icons = [
  <svg key="1" viewBox="0 0 24 24" className="w-16 h-16 stroke-marigold fill-none stroke-[1.4]"><circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" /></svg>,
  <svg key="2" viewBox="0 0 24 24" className="w-16 h-16 stroke-marigold fill-none stroke-[1.4]"><path d="M4 18V6l8-3 8 3v12" /><path d="M9 21v-6h6v6" /></svg>,
  <svg key="3" viewBox="0 0 24 24" className="w-16 h-16 stroke-marigold fill-none stroke-[1.4]"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6-5.5-3-5.5 3 1-6L3 8.9 9 8z" /></svg>,
  <svg key="4" viewBox="0 0 24 24" className="w-16 h-16 stroke-marigold fill-none stroke-[1.4]"><rect x="3" y="10" width="14" height="7" rx="1" /><path d="M17 12h2.5L21 15v2h-4" /><circle cx="7.5" cy="19" r="1.5" /><circle cx="17.5" cy="19" r="1.5" /></svg>,
]

export default function Holistic({ white = true }) {
  return (
    <section className={white ? 'bg-white' : ''}>
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Beyond the classroom" title="A holistic development approach." />
        </Reveal>

        {holistic.map((row, i) => (
          <Reveal key={row.tag} delay={i * 60}>
            <div
              className={`grid lg:grid-cols-2 gap-10 items-center py-11 border-b border-line last:border-b-0 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="aspect-[16/11] rounded-2xl bg-gradient-to-br from-ink to-ink2 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-ledger-dark" />
                <div className="relative z-10">{icons[i]}</div>
              </div>
              <div>
                <span className="font-mono text-[11.5px] font-bold uppercase tracking-wide text-marigolddark">
                  {row.tag}
                </span>
                <h3 className="text-2xl my-2.5">{row.title}</h3>
                <p className="text-[15px] mb-3.5">{row.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {row.chips.map((chip) => (
                    <span
                      key={chip}
                      className="bg-paper border border-line rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold text-ink2"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
