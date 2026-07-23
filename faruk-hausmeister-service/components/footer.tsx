import Image from 'next/image'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0e1c2a] border-t border-[#F2EFE6]/8 py-12">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          {/* Logo – bild10 at ~60px height */}
          <a href="/" aria-label="Faruk Hausmeister und Garten-Service – Startseite">
            {/*
              Dark background → white/inverted logo via CSS filter.
              This keeps the img src identical and the inversion automatic
              whenever the container bg is dark, without hard-coding per section.
            */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%2010-KlyCr6fMQ9bXGIHMWNyRwoMbPntNWg.png"
              alt="Logo Faruk Hausmeister und Garten-Service"
              width={180}
              height={60}
              style={{ height: '60px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              unoptimized
            />
          </a>

          {/* Contact line + Social */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+4915207156837"
              className="font-sans text-[#F2EFE6]/60 text-[0.875rem] hover:text-[#F2EFE6] transition-colors"
            >
              +49 1520 7156837
            </a>

            {/* Facebook icon */}
            <a
              href="https://www.facebook.com/p/Faruk-Hausmeister-und-Garten-Service-61574087717594/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Faruk Hausmeister auf Facebook"
              className="w-8 h-8 rounded-full bg-[#F2EFE6]/10 flex items-center justify-center text-[#F2EFE6]/60 hover:bg-[#B08D57]/20 hover:text-[#B08D57] transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#F2EFE6]/8 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[#F2EFE6]/40 text-[0.8rem]">
            &copy; {year} Faruk Hausmeister &amp; Garten-Service, Heide. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/impressum"
              className="font-sans text-[#F2EFE6]/40 text-[0.8rem] hover:text-[#F2EFE6]/70 transition-colors"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="font-sans text-[#F2EFE6]/40 text-[0.8rem] hover:text-[#F2EFE6]/70 transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
