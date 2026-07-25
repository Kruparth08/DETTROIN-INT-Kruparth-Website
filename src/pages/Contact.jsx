import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { school } from '../data/content'
import { PinIcon, PhoneIcon, MailIcon } from '../components/Icons'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="We'd love to hear from you."
        desc="Reach out with any question about admissions, academics or a campus visit."
      />

      <section>
        <div className="container grid lg:grid-cols-[1fr_1.2fr] gap-14">
          <Reveal className="space-y-6">
            <div className="bg-white border border-line rounded-2xl p-6 flex gap-4">
              <PinIcon className="w-6 h-6 fill-marigolddark shrink-0" />
              <div>
                <h4 className="text-base mb-1">Campus Address</h4>
                <p className="text-sm">{school.location}</p>
              </div>
            </div>
            <div className="bg-white border border-line rounded-2xl p-6 flex gap-4">
              <PhoneIcon className="w-6 h-6 fill-marigolddark shrink-0" />
              <div>
                <h4 className="text-base mb-1">Phone</h4>
                <p className="text-sm">
                  <a href={school.phoneHref} className="hover:text-marigolddark">
                    {school.phone}
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-white border border-line rounded-2xl p-6 flex gap-4">
              <MailIcon className="w-6 h-6 fill-marigolddark shrink-0" />
              <div>
                <h4 className="text-base mb-1">Email</h4>
                <p className="text-sm">
                  <a href={`mailto:${school.email}`} className="hover:text-marigolddark">
                    {school.email}
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden border border-line aspect-video">
              <iframe
                title="Excellence International School location"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.3204773632947!2d78.08555319999999!3d27.892137100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974b7a50c9c6457%3A0x5cd02be223374122!2sExcellence%20International%20School%20%7C%20Kids%20Play%20School%20in%20Aligarh%20%7C%20kindergarten%20in%20aligarh%20%7C%20Kids%20Play%20school%20in%20Aligarh%20%7C!5e0!3m2!1sen!2sin!4v1784989137920!5m2!1sen!2sin"/>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
