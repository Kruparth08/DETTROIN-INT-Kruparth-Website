import AboutPreview from "../sections/AboutPreview"
import AcademicLedger from "../sections/AcademicLedger"
import Hero from "../sections/Hero"
import Holistic from "../sections/Holistic"
import WhyUs from "../sections/WhyUs"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <AcademicLedger white/>
      <WhyUs />
      <Holistic white/>
    </>
  )
}

export default Home
