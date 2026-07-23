'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Bewertungen', href: '#bewertungen' },
  { label: 'Kontakt', href: '#kontakt' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ease-out duration-[350ms] ${
        scrolled
          ? 'bg-[#F7F4EC] shadow-[0_2px_20px_rgba(27,42,58,0.07)]'
          : 'bg-transparent'
      }`}
      style={{ transitionProperty: 'background-color, box-shadow' }}
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16 h-[72px] flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Faruk Hausmeister und Garten-Service – Startseite">
          <Image
            src={
              scrolled
                ? 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%2010-KlyCr6fMQ9bXGIHMWNyRwoMbPntNWg.png'
                : 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%2010-KlyCr6fMQ9bXGIHMWNyRwoMbPntNWg.png'
            }
            alt="Logo Faruk Hausmeister und Garten-Service"
            width={120}
            height={40}
            style={{
              height: '40px',
              width: 'auto',
              filter: scrolled ? 'none' : 'brightness(0) invert(1)',
            }}
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-underline text-[0.9rem] font-medium tracking-[0.01em] transition-colors duration-200 hover:text-[#B08D57] py-1 ${
                scrolled ? 'text-[#5C6B63]' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+4915207156837"
            className={`text-[0.9rem] font-medium transition-colors duration-200 min-h-[44px] inline-flex items-center ${
              scrolled ? 'text-[#1B2A3A]' : 'text-white'
            }`}
          >
            +49 1520 7156837
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-[10px] bg-[#B08D57] text-[#1B2A3A] text-[0.875rem] font-semibold tracking-[0.01em] transition-all duration-[220ms] ease-[ease] hover:brightness-[1.06] hover:scale-[1.02]"
          >
            Termin anfragen
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 rounded-[8px] transition-colors ${
            scrolled ? 'text-[#1B2A3A]' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#F7F4EC] border-t border-[#E1D9C4] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[1rem] font-medium text-[#1B2A3A] hover:text-[#B08D57] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-[#E1D9C4] flex flex-col gap-3">
            <a
              href="tel:+4915207156837"
              className="inline-flex items-center min-h-[44px] text-[0.9rem] text-[#5C6B63] hover:text-[#1B2A3A] transition-colors"
            >
              +49 1520 7156837
            </a>
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-3 rounded-[10px] bg-[#B08D57] text-[#1B2A3A] text-[0.875rem] font-semibold transition-all duration-[220ms] hover:brightness-[1.06]"
            >
              Termin anfragen
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
