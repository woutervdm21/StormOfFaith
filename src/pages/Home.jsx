import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import About from '../components/About'
import WhyMe from '../components/WhyMe'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <WhyMe />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
