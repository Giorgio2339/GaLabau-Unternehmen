'use client'

import { useReveal } from '@/hooks/use-reveal'

export function UeberMich() {
  const [ref, visible] = useReveal<HTMLDivElement>()

  return (
    <section
      id="ueber-mich"
      className="bg-[#EDE9DC]"
      style={{ paddingTop: 'clamp(5rem,10vw,9rem)', paddingBottom: 'clamp(5rem,10vw,9rem)' }}
      aria-label="Über mich"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
        <div
          ref={ref}
          className={`reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start${visible ? ' is-visible' : ''}`}
        >
          {/* Left: Image – bild5 */}
          <div>
            <div className="rounded-[10px] overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%205.PNG-8sthqb4DvWm8cFJaU5r9hh8Q6JKAw9.png"
                alt="Benutzte Gartenwerkzeuge auf einem Holztisch"
                className="img-zoom w-full h-full object-cover"
                width={860}
                height={640}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Text + Proof chips */}
          <div className="flex flex-col justify-center">
            <p className="font-sans font-semibold uppercase tracking-[0.12em] text-[0.8rem] text-[#B08D57] mb-4">
              Über mich
            </p>
            <h2
              className="font-serif font-semibold text-[#1B2A3A] text-balance mb-6"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.01em', lineHeight: 1.15 }}
            >
              Handwerk mit Namen und Gesicht.
            </h2>

            {/* Three separate paragraphs per spec */}
            <p
              className="font-sans text-[#5C6B63] leading-[1.65]"
              style={{ fontSize: 'clamp(1.05rem, 1.2vw, 1.125rem)', marginBottom: '1.25rem' }}
            >
              Mein Name ist Faruk. Seit Jahren betreue ich Haushalte und Gärten in Heide und Umgebung – mit dem Anspruch, jede Aufgabe so zu erledigen, als wäre es mein eigenes Zuhause.
            </p>

            <p
              className="font-sans text-[#5C6B63] leading-[1.65]"
              style={{ fontSize: 'clamp(1.05rem, 1.2vw, 1.125rem)', marginBottom: '1.25rem' }}
            >
              Keine halben Sachen, keine Ausreden. Nur ehrliche Arbeit, faire Preise und Termine, auf die man sich verlassen kann. Das ist der Grund, warum aus einmaligen Aufträgen fast immer feste Kunden werden.
            </p>

            <p
              className="font-sans text-[#5C6B63] leading-[1.65]"
              style={{ fontSize: '0.9rem', marginBottom: '2.5rem' }}
            >
              Faruk Hausmeister und Garten-Service ist seit 2024 in Heide und Umgebung im Einsatz. Inhaber: Faruk Mirhat.
            </p>

            <div className="w-12 h-px bg-[#3E5C46] opacity-40 mb-8" aria-hidden="true" />

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 rounded-[10px] bg-[#F7F4EC] border border-[#E1D9C4]">
                <span className="flex gap-0.5 flex-shrink-0" aria-label="5 von 5 Sternen">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#B08D57" aria-hidden="true">
                      <path d="M8 1.5L9.545 5.73L14 6.163L10.818 9.145L11.764 13.5L8 11.255L4.236 13.5L5.182 9.145L2 6.163L6.455 5.73L8 1.5Z"/>
                    </svg>
                  ))}
                </span>
                <span className="font-sans text-[#1B2A3A] text-[0.875rem] font-medium">
                  Durchgehend 5,0 Sterne auf Google
                </span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-[10px] bg-[#F7F4EC] border border-[#E1D9C4]">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#3E5C46] flex-shrink-0" aria-hidden="true" />
                <span className="font-sans text-[#1B2A3A] text-[0.875rem] font-medium">
                  Oft schon am nächsten Tag verfügbar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
