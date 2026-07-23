'use client'

import { useReveal } from '@/hooks/use-reveal'

const services = [
  {
    id: 'garten',
    title: 'Garten- & Grünpflege',
    bullets: ['Rasenmähen', 'Hecken- und Sträucherschnitt', 'Unkrautentfernung', 'Beete anlegen'],
    description:
      'Von der klassischen Rasenpflege über den professionellen Hecken- und Sträucherschnitt bis zur kompletten Neuanlage von Beeten – ich sorge dafür, dass Ihr Garten das ganze Jahr über gepflegt aussieht. Schnell, sauber und mit einem Auge für Details, die andere übersehen.',
    imgSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%202-Th8Ay0ct3i9Gho8buVDSlm2zA5mBaR.jpg',
    imgAlt: 'Gepflegtes Blumenbeet mit Rosen',
  },
  {
    id: 'hausmeister',
    title: 'Hausmeisterservice & Reparaturen',
    bullets: ['Kleine Reparaturen im Haus', 'Laufende Instandhaltung', 'Montagearbeiten'],
    description:
      'Kleine Reparaturen im Haus, laufende Instandhaltung, Montagearbeiten – alles, was sonst liegen bleibt, hat bei mir einen festen Ansprechpartner. Zuverlässig erledigt, oft schon am nächsten Tag.',
    imgSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%203.PNG-Z2l6s0Oy26FoQ3fZICY4WAyvxDQFSz.png',
    imgAlt: 'Möbelmontage mit Inbusschlüssel',
  },
  {
    id: 'umzug',
    title: 'Umzugshilfe & Möbelmontage',
    bullets: ['Ab- und Aufbau von Möbeln', 'Unterstützung beim Umzug'],
    description:
      'Ob Ab- und Aufbau von Möbeln oder Unterstützung beim Umzug – ich packe mit an, pünktlich und ohne unnötige Umwege. Effizient, ordentlich, stressfrei für Sie.',
    imgSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%204.PNG-g6oI8GxZBDrkuo6axfrxLhXU1Wi1PZ.png',
    imgAlt: 'Bis unters Dach beladener Umzugstransporter',
  },
]

function ServiceBlock({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {
  const [ref, visible] = useReveal<HTMLElement>()
  const isEven = index % 2 === 1

  return (
    <article
      ref={ref}
      className={`reveal grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center${visible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div
        className={`rounded-[10px] overflow-hidden ${isEven ? 'lg:order-2' : ''}`}
        style={{ aspectRatio: '4/3' }}
      >
        <img
          src={service.imgSrc}
          alt={service.imgAlt}
          className="img-zoom w-full h-full object-cover"
          width={760}
          height={520}
          loading="lazy"
        />
      </div>

      {/* Text */}
      <div className={isEven ? 'lg:order-1' : ''}>
        <h3
          className="font-serif font-semibold text-[#1B2A3A] mb-5"
          style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.01em', lineHeight: 1.2 }}
        >
          {service.title}
        </h3>

        <ul className="flex flex-col gap-2.5 mb-6">
          {service.bullets.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3E5C46]" aria-hidden="true" />
              <span
                className="font-sans text-[#5C6B63] leading-[1.65]"
                style={{ fontSize: 'clamp(1.05rem, 1.2vw, 1.125rem)' }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        <p
          className="font-sans text-[#5C6B63] leading-[1.65]"
          style={{ fontSize: 'clamp(1rem, 1.2vw, 1.075rem)' }}
        >
          {service.description}
        </p>

        <div className="mt-8 w-12 h-px bg-[#3E5C46] opacity-40" aria-hidden="true" />
      </div>
    </article>
  )
}

export function Leistungen() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>()

  return (
    <section
      id="leistungen"
      className="bg-[#F7F4EC]"
      style={{ paddingTop: 'clamp(5rem,10vw,9rem)', paddingBottom: 'clamp(5rem,10vw,9rem)' }}
      aria-label="Leistungen"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
        <div
          ref={headerRef}
          className={`reveal mb-16 lg:mb-20${headerVisible ? ' is-visible' : ''}`}
        >
          <p className="font-sans font-semibold uppercase tracking-[0.12em] text-[0.8rem] text-[#B08D57] mb-4">
            Leistungen
          </p>
          <h2
            className="font-serif font-semibold text-[#1B2A3A] text-balance"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.01em', lineHeight: 1.1 }}
          >
            Was ich für Sie erledige.
          </h2>
        </div>

        <div className="flex flex-col gap-[clamp(4rem,8vw,7rem)]">
          {services.map((service, index) => (
            <ServiceBlock key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
