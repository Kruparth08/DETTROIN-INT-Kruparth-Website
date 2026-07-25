import Reveal from '../components/Reveal'

export default function AboutPreview() {
  return (
    <section id="about-preview">
      <div className="container grid lg:grid-cols-2 gap-14 items-start">
        <Reveal>
          <span className="eyebrow">About the school</span>
          <h2 className="mt-3.5 text-[clamp(1.9rem,3.4vw,2.6rem)] font-semibold">
            Modern education, built on a balanced foundation.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mb-4 text-[16px]">
            Excellence International School, Aligarh is dedicated to modern education that balances academics,
            co-curricular activity and character development.
          </p>
          <p className="mb-4 text-[16px]">
            We believe education should build knowledge, critical thinking, discipline and life skills — supported
            by a student-focused approach in an encouraging, structured environment.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-paper border border-line rounded-2xl p-5">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-marigolddark">Vision</span>
              <h4 className="text-lg mt-2 mb-2">Confident & responsible</h4>
              <p className="text-sm">
                To raise confident, responsible and innovative individuals who contribute positively to society.
              </p>
            </div>
            <div className="bg-paper border border-line rounded-2xl p-5">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-marigolddark">Mission</span>
              <h4 className="text-lg mt-2 mb-2">Five commitments</h4>
              <ul className="space-y-1">
                {['High-quality education', 'Curiosity & creativity', 'Strong academic foundations', 'Discipline & ethics', 'Future-readiness'].map(
                  (item) => (
                    <li key={item} className="text-sm text-textsoft pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-marigolddark">
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
