import { motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-3xl px-4 text-center">
        <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to transform?</motion.h3>
        <p className="mt-3 text-gray-600">Book a free strategy call. We’ll audit your habits and design a 30-day momentum plan on the call—free.</p>
        <a href="#" className="mt-6 inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white font-semibold shadow-lg shadow-gray-900/10 hover:bg-gray-800">
          <CalendarDays className="mr-2 h-4 w-4" />
          Book Your Free Call
        </a>
        <p className="mt-2 text-xs text-gray-500">Spots are limited. No pressure—just clarity.</p>
      </div>
    </section>
  )
}
