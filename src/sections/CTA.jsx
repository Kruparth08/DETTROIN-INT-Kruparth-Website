import Reveal from '../components/Reveal'
import { school } from '../data/content'

export default function CTA() {
  return (
    <section id="admissions-cta">
      <div className="container">
        <Reveal>
          <div className="bg-gradient-to-br from-ink via-ink2 to-denim rounded-[26px] p-9 sm:p-14 flex flex-wrap justify-between items-center gap-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-ledger-dark" />
            <div className="relative max-w-lg">
              <h2 className="!text-white text-[clamp(1.7rem,3vw,2.3rem)]">Admissions open for 2026–2027.</h2>
              <p className="!text-[#C6D0DD] mt-2.5">
                Seats are limited across Play Group through Class 8. Start your enquiry today and our admissions
                team will get back to you within one working day.
              </p>
            </div>
            <div className="relative flex gap-3.5 flex-wrap">
              <a
                href={school.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[14.5px] bg-marigold text-ink hover:bg-marigolddark hover:text-white hover:-translate-y-0.5 transition"
              >
                Call Admissions Desk
              </a>
              <a
                href={`mailto:${school.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[14.5px] bg-white text-ink hover:bg-marigold hover:-translate-y-0.5 transition"
              >
                Email Enquiry
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
