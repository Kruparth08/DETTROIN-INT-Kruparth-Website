import PageHeader from '../components/PageHeader'
import AcademicLedger from '../sections/AcademicLedger'
import Infrastructure from '../sections/Infrastructure'
import Holistic from '../sections/Holistic'
import CTA from '../sections/CTA'

export default function Academics() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="A structured path from Daycare to Middle School."
        desc="Age-appropriate methods at every stage — built to grow a student's confidence, curiosity and independence."
      />
      <AcademicLedger white={false} />
      <Infrastructure />
      <Holistic white={false} />
      <CTA />
    </>
  )
}
