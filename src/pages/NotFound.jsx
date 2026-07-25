import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-32">
      <div className="container text-center">
        <span className="eyebrow" style={{ justifyContent: 'center' }}>
          404
        </span>
        <h1 className="mt-4 text-4xl">This page has wandered off.</h1>
        <p className="mt-4">The page you're looking for doesn't exist or has moved.</p>
        <Link
          to="/"
          className="inline-flex mt-8 items-center gap-2 px-6 py-3 rounded-full font-bold text-[14.5px] bg-marigold text-ink hover:bg-marigolddark hover:text-white transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
