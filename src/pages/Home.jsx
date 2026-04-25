import Hero from '../components/Hero'
import About from '../components/About'
import WhyMe from '../components/WhyMe'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhyMe />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
