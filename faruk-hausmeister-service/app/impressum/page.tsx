import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum – Faruk Hausmeister & Garten-Service',
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EC]">
      {/* Top bar */}
      <div className="bg-[#16263A] py-10">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#F2EFE6]/60 hover:text-[#B08D57] text-[0.875rem] font-sans transition-colors mb-6"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Zurück zur Startseite
          </Link>
          <h1
            className="font-serif font-semibold text-[#F2EFE6]"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.01em' }}
          >
            Impressum
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16 py-16">
        <div className="max-w-[640px]">
          <p className="font-sans text-[#5C6B63] leading-[1.65] italic">
            Inhalt wird vom Kunden geliefert.
          </p>
        </div>
      </div>
    </div>
  )
}
