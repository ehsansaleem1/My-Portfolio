import './App.css'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Testimonial from './components/testimonial'
import Contact from './components/contact'
import Footer from './components/footer'

export default function App() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  )
}
