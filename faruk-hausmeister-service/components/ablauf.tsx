'use client'

import { useReveal } from '@/hooks/use-reveal'

const steps = [
  {
    num: '01',
    title: 'Anfrage stellen',
    description:
      'Kurz Kontakt aufnehmen, per Telefon oder über das Formular. Sie schildern, worum es geht.',
  },
  {
    num: '02',
    title: 'Termin abstimmen',
    description:
      'Wir klären die Details, bei Bedarf schaue ich mir die Situation vor Ort an – meist geht das erstaunlich schnell.',
  },
  {
    num: '03',
    title: 'Erledigt, zuverlässig',
    description:
      'Die Arbeit wird termingerecht, sauber und mit Sorgfalt ausgeführt – oft schon am nächsten Tag.',
  },
]

function StepCard({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const [ref, visible] = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal flex flex-col gap-0 p-8 lg:p-10 relative${visible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${index * 110}ms` }}
    >
      {/* Vertical divider between steps (desktop only) */}
      {index < steps.length - 1 && (
        <div
          className="hidden md:block absolute right-0 top-[10%] h-[80%] w-px bg-[#F2EFE6]/12"
          aria-hidden="true"
        />
      )}

      {/* Number – own element above title, no overlap */}
      <span
        className="font-serif font-semibold text-[#B08D57] leading-none select-none block"
        style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', letterSpacing: '-0.02em', marginBottom: '1rem' }}
        aria-hidden="true"
      >
        {step.num}
      </span>

      {/* Title – separate element, full opacity, no clipping */}
      <h3
        className="font-serif font-semibold text-[#F2EFE6] block"
        style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: '0.875rem' }}
      >
        {step.title}
      </h3>

      <p
        className="font-sans text-[#F2EFE6]/65 leading-[1.65]"
        style={{ fontSize: 'clamp(1rem, 1.1vw, 1.05rem)' }}
      >
        {step.description}
      </p>
    </div>
  )
}

export function Ablauf() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>()

  return (
    <section
      id="ablauf"
      className="bg-[#16263A]"
      style={{ paddingTop: 'clamp(5rem,10vw,9rem)', paddingBottom: 'clamp(5rem,10vw,9rem)' }}
      aria-label="Ablauf"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
        <div
          ref={headerRef}
          className={`reveal mb-16${headerVisible ? ' is-visible' : ''}`}
        >
          <p className="font-sans font-semibold uppercase tracking-[0.12em] text-[0.8rem] text-[#B08D57] mb-4">
            So einfach geht&apos;s
          </p>
          <h2
            className="font-serif font-semibold text-[#F2EFE6] text-balance"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.01em', lineHeight: 1.15 }}
          >
            In drei Schritten erledigt.
          </h2>
        </div>

        {/* Steps grid with subtle border between cells on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-[#F2EFE6]/8 rounded-[12px] overflow-hidden">
          {steps.map((step, index) => (
            <div key={step.num} className="bg-[#16263A]">
              <StepCard step={step} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
