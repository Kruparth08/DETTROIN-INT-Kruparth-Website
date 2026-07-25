import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import FAQ from '../sections/FAQ'
import { admissionSteps, school } from '../data/content'

const grades = ['Play Group', 'Nursery', 'Kindergarten', 'Daycare', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th']

export default function Admissions() {
  const [form, setForm] = useState({ name: '', phone: '', grade: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Admissions 2026–27"
        title="Start your child's journey with us."
        desc="Seats are limited across Play Group through Class 8, plus Daycare. Here's how the admission process works."
      />

      <section id="procedure">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow="Admission procedure" title="Four simple steps to a confirmed seat." />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {admissionSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 80}>
                <div className="bg-white border border-line rounded-2xl p-6 h-full">
                  <span className="font-mono text-xs font-bold text-marigolddark">{step.step}</span>
                  <h3 className="text-[18.5px] mt-2.5 mb-2">{step.title}</h3>
                  <p className="text-sm">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white" id="enquiry">
        <div className="container grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <span className="eyebrow">Admission enquiry form</span>
            <h2 className="mt-3.5 text-[clamp(1.9rem,3.4vw,2.6rem)] font-semibold">Tell us about your child.</h2>
            <p className="mt-4 text-[16px] max-w-md">
              Share a few details and our admissions team will call you back within one working day to guide you
              through next steps.
            </p>
            <ul className="mt-7 space-y-4">
              <li className="flex gap-3 text-[15px] text-textsoft">
                <span className="font-bold text-ink">Call:</span> {school.phone}
              </li>
              <li className="flex gap-3 text-[15px] text-textsoft">
                <span className="font-bold text-ink">Email:</span> {school.email}
              </li>
              <li className="flex gap-3 text-[15px] text-textsoft">
                <span className="font-bold text-ink">Visit:</span> {school.location}
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100}>
            {submitted ? (
              <div className="bg-paper border border-line rounded-2xl p-8 text-center">
                <h3 className="text-xl mb-2">Thank you, {form.name.split(' ')[0] || 'there'}!</h3>
                <p>Your enquiry has been received. Our admissions team will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-paper border border-line rounded-2xl p-7 sm:p-8 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="name">
                    Parent / Guardian name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] outline-none focus:border-marigolddark"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="phone">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] outline-none focus:border-marigolddark"
                    placeholder="+91"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="grade">
                    Grade applying for
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    required
                    value={form.grade}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] outline-none focus:border-marigolddark"
                  >
                    <option value="">Select a grade</option>
                    {grades.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="message">
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] outline-none focus:border-marigolddark resize-none"
                    placeholder="Anything you'd like us to know"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-bold text-[14.5px] bg-marigold text-ink hover:bg-marigolddark hover:text-white transition"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <FAQ white={false} />
    </>
  )
}
