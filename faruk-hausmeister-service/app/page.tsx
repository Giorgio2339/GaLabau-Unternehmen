import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { TrustStrip } from '@/components/trust-strip'
import { Leistungen } from '@/components/leistungen'
import { UeberMich } from '@/components/ueber-mich'
import { Ablauf } from '@/components/ablauf'
import { Bewertungen } from '@/components/bewertungen'
import { Galerie } from '@/components/galerie'
import { Kontakt } from '@/components/kontakt'
import { Footer } from '@/components/footer'
import { MobileCallBar, CALL_BAR_HEIGHT } from '@/components/mobile-call-bar'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Leistungen />
        <UeberMich />
        <Ablauf />
        <Bewertungen />
        <Galerie />
        <Kontakt />
      </main>
      <Footer />
      {/* Bottom puffer: prevents the fixed call-bar from covering footer content on mobile */}
      <div className="md:hidden" style={{ height: CALL_BAR_HEIGHT }} aria-hidden="true" />
      <MobileCallBar />
    </>
  )
}
