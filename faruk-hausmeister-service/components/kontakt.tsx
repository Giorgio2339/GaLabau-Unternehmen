'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/use-reveal'

// Shared underline-style input/textarea class
const fieldCls =
  'w-full bg-transparent border-0 border-b border-[#F2EFE6]/25 px-0 py-2.5 font-sans text-[#F2EFE6] placeholder-[#F2EFE6]/35 text-[0.9rem] outline-none transition-colors duration-200 focus:border-[#B08D57] rounded-none'

export function Kontakt() {
  const [accepted, setAccepted] = useState(false)
  const [ref, visible] = useReveal<HTMLDivElement>()

  return (
    <section
      id="kontakt"
      className="bg-[#16263A]"
      style={{ paddingTop: 'clamp(5rem,10vw,9rem)', paddingBottom: 'clamp(5rem,10vw,9rem)' }}
      aria-label="Kontakt"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
        <div
          ref={ref}
          className={`reveal grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20${visible ? ' is-visible' : ''}`}
        >

          {/* Left: Info */}
          <div>
            <p className="font-sans font-semibold uppercase tracking-[0.12em] text-[0.8rem] text-[#B08D57] mb-4">
              Kontakt
            </p>
            <h2
              className="font-serif font-semibold text-[#F2EFE6] text-balance mb-6"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.01em', lineHeight: 1.15 }}
            >
              Lassen Sie uns sprechen.
            </h2>
            <p
              className="font-sans text-[#F2EFE6]/70 leading-[1.65] mb-10"
              style={{ fontSize: 'clamp(1.05rem, 1.2vw, 1.125rem)' }}
            >
              Zwei Wege – schnell und unkompliziert: Ein kurzer Anruf für Dringendes, das Formular für alles Planbare.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-6 mb-10">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-9 h-9 rounded-[8px] bg-[#F2EFE6]/10 flex items-center justify-center mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6C3.5 9.5 8 14.5 8 14.5C8 14.5 12.5 9.5 12.5 6C12.5 3.515 10.485 1.5 8 1.5ZM8 7.5C7.172 7.5 6.5 6.828 6.5 6C6.5 5.172 7.172 4.5 8 4.5C8.828 4.5 9.5 5.172 9.5 6C9.5 6.828 8.828 7.5 8 7.5Z" fill="#B08D57"/>
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-[#F2EFE6]/50 text-[0.8rem] uppercase tracking-[0.06em] mb-1">Adresse</p>
                  <p className="font-sans text-[#F2EFE6] text-[0.95rem] leading-relaxed">
                    Hermann-Löns-Straße 15<br />25746 Heide
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-9 h-9 rounded-[8px] bg-[#F2EFE6]/10 flex items-center justify-center mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3.5 2.5H6L7.5 6.5L5.5 7.5C6.2 9.3 7.7 10.8 9.5 11.5L10.5 9.5L14.5 11V13.5C14.5 14.052 14.052 14.5 13.5 14.5C7.424 14.5 2.5 9.576 2.5 3.5C2.5 2.948 2.948 2.5 3.5 2.5Z" fill="#B08D57"/>
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-[#F2EFE6]/50 text-[0.8rem] uppercase tracking-[0.06em] mb-1">Telefon</p>
                  <a
                    href="tel:+4915207156837"
                    className="font-sans text-[#F2EFE6] text-[0.95rem] hover:text-[#B08D57] transition-colors"
                  >
                    +49 1520 7156837
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-9 h-9 rounded-[8px] bg-[#F2EFE6]/10 flex items-center justify-center mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="5.5" stroke="#B08D57" strokeWidth="1.25"/>
                    <path d="M8 5V8.5L10.5 10" stroke="#B08D57" strokeWidth="1.25" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-[#F2EFE6]/50 text-[0.8rem] uppercase tracking-[0.06em] mb-1">Öffnungszeiten</p>
                  <div className="flex flex-col gap-1">
                    {[
                      { day: 'Mo–Fr', time: '08:00–18:00' },
                      { day: 'Sa', time: '08:00–14:00' },
                      { day: 'So', time: 'geschlossen' },
                    ].map((row) => (
                      <div key={row.day} className="flex gap-4">
                        <span className="font-sans text-[#F2EFE6]/60 text-[0.875rem] w-10">{row.day}</span>
                        <span className="font-sans text-[#F2EFE6] text-[0.875rem]">{row.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Accent CTA for calling */}
            <a
              href="tel:+4915207156837"
              className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3 rounded-[10px] border border-[#F2EFE6]/20 text-[#F2EFE6] text-[0.9rem] font-medium hover:border-[#B08D57] hover:text-[#B08D57] transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3.5 2.5H6L7.5 6.5L5.5 7.5C6.2 9.3 7.7 10.8 9.5 11.5L10.5 9.5L14.5 11V13.5C14.5 14.052 14.052 14.5 13.5 14.5C7.424 14.5 2.5 9.576 2.5 3.5C2.5 2.948 2.948 2.5 3.5 2.5Z" fill="currentColor"/>
              </svg>
              Jetzt anrufen
            </a>
          </div>

          {/* Right: Form – underline-style fields */}
          <div>
            <form
              className="flex flex-col gap-8"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Kontaktformular"
            >
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="font-sans text-[#F2EFE6]/50 text-[0.75rem] uppercase tracking-[0.08em]"
                >
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Ihr vollständiger Name"
                  className={fieldCls}
                />
              </div>

              {/* Phone / Email side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="telefon"
                    className="font-sans text-[#F2EFE6]/50 text-[0.75rem] uppercase tracking-[0.08em]"
                  >
                    Telefon
                  </label>
                  <input
                    id="telefon"
                    type="tel"
                    placeholder="+49 …"
                    className={fieldCls}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-sans text-[#F2EFE6]/50 text-[0.75rem] uppercase tracking-[0.08em]"
                  >
                    E-Mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="ihre@email.de"
                    className={fieldCls}
                  />
                </div>
              </div>

              {/* Service dropdown */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="service"
                  className="font-sans text-[#F2EFE6]/50 text-[0.75rem] uppercase tracking-[0.08em]"
                >
                  Art der Anfrage *
                </label>
                <select
                  id="service"
                  required
                  defaultValue=""
                  className={`${fieldCls} cursor-pointer`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 7L11 1' stroke='%23B08D57' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 4px center',
                    backgroundColor: 'transparent',
                  }}
                >
                  <option value="" disabled className="text-[#F2EFE6]/30 bg-[#16263A]">Bitte wählen …</option>
                  <option value="garten" className="bg-[#16263A]">Garten- &amp; Grünpflege</option>
                  <option value="hausmeister" className="bg-[#16263A]">Hausmeisterservice &amp; Reparaturen</option>
                  <option value="umzug" className="bg-[#16263A]">Umzugshilfe &amp; Möbelmontage</option>
                  <option value="sonstiges" className="bg-[#16263A]">Sonstiges</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="nachricht"
                  className="font-sans text-[#F2EFE6]/50 text-[0.75rem] uppercase tracking-[0.08em]"
                >
                  Nachricht <span className="normal-case">(optional)</span>
                </label>
                <textarea
                  id="nachricht"
                  rows={3}
                  placeholder="Beschreiben Sie kurz Ihr Anliegen …"
                  className={`${fieldCls} resize-none`}
                />
              </div>

              {/* Privacy checkbox */}
              <div className="flex items-start gap-3">
                <input
                  id="datenschutz"
                  type="checkbox"
                  required
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded-[4px] accent-[#B08D57] cursor-pointer flex-shrink-0"
                />
                <label
                  htmlFor="datenschutz"
                  className="font-sans text-[#F2EFE6]/55 text-[0.8rem] leading-[1.6] cursor-pointer"
                >
                  Ich habe die{' '}
                  <a href="/datenschutz" className="text-[#B08D57] underline underline-offset-2 hover:text-[#F2EFE6] transition-colors">
                    Datenschutzerklärung
                  </a>{' '}
                  gelesen und stimme der Verarbeitung meiner Daten zu. *
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center min-h-[44px] px-7 py-4 rounded-[10px] bg-[#B08D57] text-[#1B2A3A] font-semibold text-[0.95rem] tracking-[0.01em] transition-all duration-[220ms] hover:brightness-[1.06] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Anfrage senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
