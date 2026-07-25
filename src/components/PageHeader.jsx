export default function PageHeader({ eyebrow, title, desc }) {
  return (
    <section className="bg-ink text-white pt-16 pb-16 bg-ledger-dark">
      <div className="container">
        <span className="eyebrow eyebrow-light">{eyebrow}</span>
        <h1 className="!text-white text-[clamp(2rem,4vw,3rem)] font-semibold mt-3.5">{title}</h1>
        {desc && <p className="!text-[#C6D0DD] mt-4 max-w-xl text-[16.5px]">{desc}</p>}
      </div>
    </section>
  )
}
