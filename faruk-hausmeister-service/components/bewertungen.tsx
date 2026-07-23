'use client'

import { useRef, useState, useCallback } from 'react'
import { useReveal } from '@/hooks/use-reveal'

const reviews = [
  {
    name: 'Tessa',
    initials: 'TE',
    color: '#3E5C46',
    quote:
      'Mein Garten bzw. Beet wurde professionell umgegraben, die Rasensoden wurden entfernt, die Fläche wurde sauber und pflanzfertig vorbereitet. Besonders positiv fand ich die freundliche Kommunikation sowie das faire Preis-Leistungs-Verhältnis.',
  },
  {
    name: 'Yvonne-Linda Steffen',
    initials: 'YS',
    color: '#B08D57',
    quote:
      'Top Hausmeisterservice! Zuverlässig, pünktlich und ich bin immer wieder sehr zufrieden mit seiner Arbeit. Egal ob Hilfe beim Umzug, Ab- und Aufbau von Möbeln, kleine Reparaturen im Haus oder Gartenarbeit.',
  },
  {
    name: 'Gunnar Berndt',
    initials: 'GB',
    color: '#3E5C46',
    quote:
      'Er konnte direkt am nächsten Tag tätig werden. Das Ergebnis ist super. Er hat sich an alle Vereinbarungen gehalten und der Preis stimmt auch.',
  },
  {
    name: 'Ute Huepke',
    initials: 'UH',
    color: '#B08D57',
    quote:
      'Faruk hat super Arbeit geleistet. Er war pünktlich, hat ohne Pausen durchgearbeitet und hat gesehen, wo angepackt werden musste. Er hatte gute Ideen, war äußerst umsichtig und sehr ordentlich.',
  },
  {
    name: 'selim TAKAK',
    initials: 'ST',
    color: '#3E5C46',
    quote:
      'Wir haben unsere Gartenreinigung dieser Firma überlassen und sind absolut begeistert. Die Arbeit wurde sehr gründlich und professionell erledigt. Schnell, zuverlässig und top Qualität.',
  },
  {
    name: 'Lina',
    initials: 'LI',
    color: '#B08D57',
    quote:
      'Sehr zuverlässiger Hausmeisterservice. Die Arbeit wurde schnell und sauber erledigt, die Terminvereinbarung war unkompliziert und der Preis absolut fair. Weitere Aufträge folgen.',
  },
  {
    name: 'Hardy',
    initials: 'HA',
    color: '#3E5C46',
    quote:
      'Faruk hat sehr gute Arbeit geleistet. Er war sehr pünktlich und hat alles zu unserer vollsten Zufriedenheit erledigt. Er war äußerst umsichtig und sehr ordentlich. Wir sind begeistert und haben schon weitere Termine mit ihm vereinbart.',
  },
  {
    name: 'Kirsten Vehrs',
    initials: 'KV',
    color: '#B08D57',
    quote:
      'Wir sind durch eine ansprechende Wurfpost auf den Gärtner Service aufmerksam geworden und nicht enttäuscht worden – super Arbeit, pünktlich und zuverlässig. Können wir nur weiterempfehlen!',
  },
  {
    name: 'Maike Madüske',
    initials: 'MM',
    color: '#3E5C46',
    quote:
      'Bin sehr zufrieden. Faruk ist immer pünktlich, macht seine Arbeit sehr ordentlich und sauber. Kann ich nur empfehlen.',
  },
]

function StarRow() {
  return (
    <span className="flex gap-0.5" aria-label="5 von 5 Sternen">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#B08D57" aria-hidden="true">
          <path d="M8 1.5L9.545 5.73L14 6.163L10.818 9.145L11.764 13.5L8 11.255L4.236 13.5L5.182 9.145L2 6.163L6.455 5.73L8 1.5Z" />
        </svg>
      ))}
    </span>
  )
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="bg-white border border-[#E1D9C4] rounded-[10px] p-7 flex flex-col gap-5 h-full select-none">
      <StarRow />
      <blockquote
        className="font-sans text-[#5C6B63] leading-[1.65] flex-1"
        style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)' }}
      >
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <footer className="flex items-center gap-3 pt-3 border-t border-[#E1D9C4]">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: review.color }}
          aria-hidden="true"
        >
          <span className="font-sans font-semibold text-[#F2EFE6] text-[0.75rem]">
            {review.initials}
          </span>
        </div>
        <div className="flex flex-col">
          <cite className="font-sans text-[#1B2A3A] text-[0.875rem] font-medium not-italic leading-tight">
            {review.name}
          </cite>
          <span className="font-sans text-[#5C6B63] text-[0.75rem]">Google-Bewertung</span>
        </div>
      </footer>
    </article>
  )
}

// Arrow button used for prev / next
function ArrowBtn({ direction, onClick, disabled }: { direction: 'prev' | 'next'; onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Vorherige Bewertungen' : 'Nächste Bewertungen'}
      className="w-10 h-10 rounded-full border border-[#E1D9C4] flex items-center justify-center text-[#1B2A3A] bg-white transition-all duration-200 hover:bg-[#B08D57] hover:border-[#B08D57] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:pointer-events-none"
    >
      {direction === 'prev' ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}

export function Bewertungen() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>()
  const trackRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Visible cards per breakpoint – handled purely via CSS column widths.
  // We track a logical page index and scroll the track div.
  // Step = 1 card at a time for smooth feel.
  const total = reviews.length

  const scrollTo = useCallback((index: number) => {
    if (!trackRef.current) return
    const card = trackRef.current.children[index] as HTMLElement
    if (!card) return
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    setCurrentIndex(index)
  }, [])

  const prev = useCallback(() => {
    scrollTo(Math.max(0, currentIndex - 1))
  }, [currentIndex, scrollTo])

  const next = useCallback(() => {
    scrollTo(Math.min(total - 1, currentIndex + 1))
  }, [currentIndex, total, scrollTo])

  return (
    <section
      id="bewertungen"
      className="bg-[#F7F4EC]"
      style={{ paddingTop: 'clamp(5rem,10vw,9rem)', paddingBottom: 'clamp(5rem,10vw,9rem)' }}
      aria-label="Bewertungen"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div
          ref={headerRef}
          className={`reveal${headerVisible ? ' is-visible' : ''}`}
          style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <p className="font-sans font-semibold uppercase tracking-[0.12em] text-[0.8rem] text-[#B08D57] mb-4">
            Bewertungen
          </p>
          <h2
            className="font-serif font-semibold text-[#1B2A3A] text-balance"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.01em', lineHeight: 1.15 }}
          >
            Warum Kunden wiederkommen.
          </h2>
        </div>

        {/* Slider track – scroll-snap */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto pb-2"
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            /* hide scrollbar visually */
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
          role="list"
          aria-label="Kundenbewertungen"
        >
          {reviews.map((review) => (
            <div
              key={review.name}
              role="listitem"
              style={{
                scrollSnapAlign: 'start',
                flex: '0 0 calc((100% - 2 * 1.25rem) / 3)',
                minWidth: '280px',
              }}
              className="sm:flex-[0_0_calc((100%-1.25rem)/2)] lg:flex-[0_0_calc((100%-2*1.25rem)/3)]"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Navigation + Badge row */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Google badge – linked */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Faruk+Hausmeister+und+Garten-Service+Heide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-[#5C6B63] text-[0.875rem] hover:underline decoration-[#B08D57] underline-offset-2 transition-colors"
          >
            <span className="flex gap-0.5" aria-label="5 von 5 Sternen">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 16 16" fill="#B08D57" aria-hidden="true">
                  <path d="M8 1.5L9.545 5.73L14 6.163L10.818 9.145L11.764 13.5L8 11.255L4.236 13.5L5.182 9.145L2 6.163L6.455 5.73L8 1.5Z" />
                </svg>
              ))}
            </span>
            <span>Durchgehend 5,0 Sterne auf Google</span>
          </a>

          {/* Arrow buttons – right-aligned */}
          <div className="flex items-center gap-2 ml-auto">
            <ArrowBtn direction="prev" onClick={prev} disabled={currentIndex === 0} />
            <ArrowBtn direction="next" onClick={next} disabled={currentIndex >= total - 1} />
          </div>
        </div>
      </div>
    </section>
  )
}
