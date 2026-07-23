'use client'

import { useReveal } from '@/hooks/use-reveal'

/*
  Grid layout (desktop, 3 columns):
  ┌──────────────────┬──────────┬──────────┐
  │                  │  bild9   │  bild7   │
  │  bild6 (2c×2r)   ├──────────┼──────────┤
  │                  │  bild8   │  bild2   │
  ├──────────┬────────┴──────────┴──────────┤
  │  bild3   │           bild4              │
  └──────────┴──────────────────────────────┘

  Row 1–2: bild6 spans col1, rows 1-2 (2r×1c)
           bild9 col2, row1  |  bild7 col3, row1
           bild8 col2, row2  |  bild2 col3, row2
  Row 3:   bild3 col1        |  bild4 spans col2-3
*/

const images = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%207-sZjL4o7h3N1lqdBCmJP6GTD8lXloAu.jpg',
    alt: 'Gepflegter Rasen mit Terrassenbereich und Anhänger',
    style: { gridColumn: '1', gridRow: '1 / span 2' },
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%208.PNG-qxvlSmVaswHx5WfabHUoxrIahevmHl.png',
    alt: 'Heckenschnitt mit der Heckenschere, POV',
    style: { gridColumn: '2', gridRow: '1' },
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%209.PNG-zvIrvkKD5gQQIbKXy4NPsB6gTuXQPa.png',
    alt: 'Rückschnitt eines Zweigs mit der Gartenschere',
    style: { gridColumn: '3', gridRow: '1' },
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%206-MqGqCZMkyPKX32IgNfWmdqe96jjyCD.jpg',
    alt: 'Minibagger CAT bei Gartenarbeiten',
    objectPosition: 'center',
    style: { gridColumn: '2', gridRow: '2' },
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%202-Th8Ay0ct3i9Gho8buVDSlm2zA5mBaR.jpg',
    alt: 'Frisch bepflanztes Rosenbeet',
    style: { gridColumn: '3', gridRow: '2' },
  },
]

export function Galerie() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>()
  const [gridRef, gridVisible] = useReveal<HTMLDivElement>()

  return (
    <section
      id="galerie"
      className="bg-[#EDE9DC]"
      style={{ paddingTop: 'clamp(5rem,10vw,9rem)', paddingBottom: 'clamp(5rem,10vw,9rem)' }}
      aria-label="Galerie"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16">
        <div
          ref={headerRef}
          className={`reveal${headerVisible ? ' is-visible' : ''}`}
          style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <p className="font-sans font-semibold uppercase tracking-[0.12em] text-[0.8rem] text-[#B08D57] mb-4">
            Einblicke
          </p>
          <h2
            className="font-serif font-semibold text-[#1B2A3A] text-balance"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.01em', lineHeight: 1.15 }}
          >
            Zuletzt erledigt.
          </h2>
        </div>

        {/* ── Desktop grid: 3 equal columns, explicit placement ── */}
        <div
          ref={gridRef}
          className={`reveal galerie-grid${gridVisible ? ' is-visible' : ''}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto auto',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="rounded-[10px] overflow-hidden"
              style={{
                ...img.style,
                minHeight: i === 0 ? 'clamp(320px, 40vw, 520px)' : 'clamp(180px, 18vw, 260px)',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="img-zoom w-full h-full object-cover"
                style={{ objectPosition: img.objectPosition ?? 'center' }}
                loading="lazy"
              />
            </div>
          ))}

{/* Bild A – Großes Bild links */}
          <div
            className="rounded-[10px] overflow-hidden"
            style={{
              gridColumn: '1 / span 2',
              gridRow: '3',
              aspectRatio: '2 / 0.9',
            }}
          >
            <img src="/jubble.png" alt="GaLabau Arbeiten" className="img-zoom w-full h-full object-cover" />
          </div>

          {/* Bild B – Kleines Bild rechts */}
          <div
            className="rounded-[10px] overflow-hidden"
            style={{
              gridColumn: '3',
              gridRow: '3',
              aspectRatio: '1 / 1',
            }}
          >
            <img src="/IMG_2288.jpg" alt="Hausmeister Service" className="img-zoom w-full h-full object-cover" />
          </div>
        </div>

        {/* ── Mobile: single column, override via inline media query via CSS class ── */}
        <style>{`
          @media (max-width: 767px) {
            #galerie .galerie-grid {
              grid-template-columns: 1fr !important;
              grid-template-rows: none !important;
            }
            #galerie .galerie-grid > div {
              grid-column: 1 !important;
              grid-row: auto !important;
              min-height: 260px !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
