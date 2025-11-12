import { motion } from 'framer-motion'
import { CalendarCheck2, Target, Gauge, Rocket } from 'lucide-react'

const steps = [
  { icon: CalendarCheck2, title: 'Clarity Call', desc: 'We map goals, constraints, and lifestyle reality.' },
  { icon: Target, title: 'Personal Plan', desc: 'A simple, tailored roadmap with micro-habits.' },
  { icon: Gauge, title: 'Accountability', desc: 'Weekly coaching and metrics keep momentum.' },
  { icon: Rocket, title: 'Sustained Results', desc: 'You’ll own skills that last far beyond the program.' },
]

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Proven Process</h2>
          <p className="mt-3 text-gray-600">Clear steps. No guesswork.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-gray-200 bg-white p-6">
              <s.icon className="h-6 w-6 text-cyan-600" />
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
