import Navbar from './Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import ProgramCards from './components/ProgramCards'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <ProgramCards />
        <Process />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-gray-200 py-10 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Elevate Coaching. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
