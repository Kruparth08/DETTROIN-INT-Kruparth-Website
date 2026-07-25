import PageHeader from '../components/PageHeader'
import AboutPreview from '../sections/AboutPreview'
import WhyUs from '../sections/WhyUs'
import Values from '../sections/Values'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Excellence International"
        title="Modern education, rooted in discipline and care."
        desc="Get to know the philosophy, values and everyday approach behind the school."
      />

      <section className="bg-white">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow">Our story</span>
              <h2 className="mt-3.5 text-[clamp(1.9rem,3.4vw,2.6rem)] font-semibold">
                Excellence International School, Aligarh
              </h2>
              <p className="mt-5 text-[16px]">
                Excellence International School is among the leading schools in Aligarh, Uttar Pradesh, known for
                quality learning, discipline and holistic development. The institution is dedicated to nurturing
                young minds with knowledge, confidence, creativity and strong ethical values.
              </p>
              <p className="mt-4 text-[16px]">
                The school focuses on building a strong academic foundation while encouraging innovation, leadership
                and personal growth — every student is guided to explore their potential and develop the skills
                needed to succeed in life.
              </p>
              <p className="mt-4 text-[16px]">
                Education here isn't limited to textbooks. It aims to create responsible individuals who are
                prepared for academic success as well as real-world challenges.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <AboutPreview />
      <WhyUs />
      <Values />
    </>
  )
}
