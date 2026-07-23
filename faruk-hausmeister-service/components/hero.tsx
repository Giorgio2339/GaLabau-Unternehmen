'use client'

import { useEffect, useRef } from 'react'

export function Hero() {
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [eyebrowRef, line1Ref, line2Ref, subRef, ctaRef]
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    els.forEach((r, i) => {
      if (!r.current) return
      if (prefersReduced) {
        r.current.style.opacity = '1'
        r.current.style.transform = 'none'
        return
      }
      r.current.style.opacity = '0'
      r.current.style.transform = 'translateY(40px)'
      r.current.style.transition = `opacity 800ms cubic-bezier(0.16,1,0.3,1), transform 800ms cubic-bezier(0.16,1,0.3,1)`

      const delay = i * 120
      setTimeout(() => {
        if (!r.current) return
        r.current.style.opacity = '1'
        r.current.style.transform = 'translateY(0)'
      }, delay + 80)
    })
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-[#16263A]">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%201-Bx5QprrcJnBPUYaQEjpxOIkil5SE0E.png"
          alt="Gepflegter Garten mit frisch gemähtem Rasen im Abendlicht"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(1.08)' }}
          width={1920}
          height={1080}
        />
        {/* Overlay: transparent top, darkens from 55% height, max 0.55 opacity at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(14,28,42,0.63) 0%, rgba(14,28,42,0.38) 30%, transparent 55%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-16 pt-32 pb-[clamp(5rem,10vw,9rem)]">
        <div className="max-w-[820px]">
          {/* Eyebrow */}
          <p
            ref={eyebrowRef}
            className="font-sans font-semibold uppercase tracking-[0.12em] text-[0.8rem] text-[#B08D57] mb-6"
            style={{ willChange: 'opacity, transform' }}
          >
            Garten- &amp; Hausmeisterservice Heide
          </p>

          {/* H1 – two lines staffeln */}
          <h1
            className="font-serif font-semibold text-white text-balance mb-6"
            style={{
              fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              overflow: 'visible',
            }}
          >
            <span
              ref={line1Ref}
              className="block"
              style={{ willChange: 'opacity, transform' }}
            >
              Ihr Zuhause.
            </span>
            <span
              ref={line2Ref}
              className="block"
              style={{ willChange: 'opacity, transform' }}
            >
              Behandelt wie mein eigenes.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subRef}
            className="font-sans text-white/75 leading-[1.65] mb-10 max-w-[580px]"
            style={{ fontSize: 'clamp(1.05rem, 1.5vw, 1.125rem)', willChange: 'opacity, transform' }}
          >
            Seit Jahren das Vertrauen der Region Heide – pünktlich, gründlich und mit einem Auge fürs Detail.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-wrap gap-4"
            style={{ willChange: 'opacity, transform' }}
          >
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center min-h-[44px] px-7 py-3.5 rounded-[10px] bg-[#B08D57] text-[#1B2A3A] font-semibold text-[0.95rem] tracking-[0.01em] transition-all duration-[220ms] hover:brightness-[1.06] hover:scale-[1.02]"
            >
              Kostenloses Angebot anfragen
            </a>
            <a
              href="tel:+4915207156837"
              className="inline-flex items-center justify-center min-h-[44px] px-7 py-3.5 rounded-[10px] border border-white/40 text-white font-medium text-[0.95rem] tracking-[0.01em] transition-all duration-[220ms] hover:border-white hover:bg-white/10"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 opacity-50">
        <span className="font-sans text-white text-[0.75rem] uppercase tracking-[0.1em]">Mehr erfahren</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M10 4L10 16M10 16L5 11M10 16L15 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
