import { Link } from 'react-router-dom'

const facts = [
  ['Play Group–8', 'GRADES OFFERED'],
  ['6', 'CORE VALUE PILLARS'],
  ['CCTV', 'MONITORED CAMPUS'],
  ['Door-to-door', 'SUPERVISED TRANSPORT'],
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-24 bg-ledger bg-paper">
      <div className="container grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          <span className="eyebrow">Ramghat Road, Aligarh · Admissions Open 2026–27</span>
          <h1 className="text-[clamp(2.4rem,4.6vw,3.7rem)] font-semibold mt-4 mb-5">
            Where every child
            <br />
            learns to{' '}
            <span className="text-marigolddark border-b-4 border-marigold">lead.</span>
          </h1>
          <p className="text-[17.5px] max-w-lg mb-7">
            Excellence International School blends structured academics with discipline and holistic development —
            helping students in Aligarh grow into confident, capable young leaders from Daycare through Middle
            School.
          </p>
          <div className="flex gap-3.5 flex-wrap mb-9">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[14.5px] bg-marigold text-ink hover:bg-marigolddark hover:text-white hover:-translate-y-0.5 transition"
            >
              Start Admission Enquiry
            </Link>
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[14.5px] border-[1.5px] border-ink text-ink hover:bg-ink hover:text-paper transition"
            >
              Explore Academics
            </Link>
          </div>
          <div className="flex gap-7 flex-wrap">
            {facts.map(([stat, label]) => (
              <div key={label} className="flex flex-col gap-0.5">
                <strong className="font-display text-[26px] text-ink">{stat}</strong>
                <span className="text-[12.5px] text-textsoft font-semibold tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="hidden sm:flex absolute -top-6 right-2 w-[112px] h-[112px] border-2 border-dashed border-marigolddark rounded-full items-center justify-center text-center rotate-[9deg] font-mono text-marigolddark text-[10px] tracking-wide uppercase font-bold leading-relaxed bg-paper z-10">
            Est. Aligarh · Uttar Pradesh
          </div>
          <div className="absolute top-8 -left-4 rotate-[-6deg] bg-marigold text-ink rounded-xl px-3.5 py-2.5 font-extrabold text-[13px] shadow-soft z-10">
            Concept-Based Learning
          </div>

          <div className="relative rounded-[22px] overflow-hidden aspect-[4/4.6] bg-gradient-to-br from-ink via-ink2 to-denim shadow-soft flex items-end p-6">
            <div className="absolute inset-0 opacity-[0.14] bg-ledger-dark" />
            <div className="relative bg-white/10 border border-white/25 backdrop-blur-md rounded-2xl px-5 py-5 w-full text-white">
              <span className="eyebrow eyebrow-light">Why families choose us</span>
              <h3 className="!text-white text-xl mt-2">Discipline, curiosity & character — every single day.</h3>
              <p className="!text-[#D6DEE8] text-sm mt-1.5">
                A student-focused approach with personalised attention, from the first day of Daycare to the final
                bell of Middle School.
              </p>
            </div>
          </div>

          <div className="absolute bottom-35 -right-6.5 rotate-[4deg] bg-white text-ink border border-line rounded-xl px-3.5 py-2.5 font-extrabold text-[13px] shadow-soft">
            Safe School Transport
          </div>
        </div>
      </div>
    </section>
  )
}
