import AboutPreview from "../sections/AboutPreview"
import AcademicLedger from "../sections/AcademicLedger"
import CTA from "../sections/CTA"
import FAQ from "../sections/Faq"
import Hero from "../sections/Hero"
import Holistic from "../sections/Holistic"
import Infrastructure from "../sections/Infrastructure"
import Testimonials from "../sections/Tesimonials"
import Values from "../sections/Values"
import WhyUs from "../sections/WhyUs"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <AcademicLedger white/>
      <WhyUs />
      <Holistic white/>
      <Infrastructure />
      <Testimonials />
      <Values />
      <FAQ white/>
      <CTA />
    </>
  )
}

export default Home
