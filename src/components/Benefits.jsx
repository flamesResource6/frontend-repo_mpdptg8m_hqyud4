import { motion } from 'framer-motion'
import { Brain, HeartHandshake, Activity, Clock } from 'lucide-react'

const items = [
  { icon: Brain, title: 'Mindset Mastery', desc: 'Rewire habits with science-backed behavior design.' },
  { icon: Activity, title: 'Holistic Health', desc: 'Nutrition, training, sleep and stress—optimized together.' },
  { icon: HeartHandshake, title: 'Real Accountability', desc: 'Weekly coaching calls and daily check-ins keep you moving.' },
  { icon: Clock, title: 'Built for Busy', desc: 'Simple, sustainable systems that fit your schedule.' },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why This Works</h2>
            <p className="mt-3 text-gray-600">Transformation is predictable when you combine coaching, data, and systems. We keep it simple, human, and effective.</p>
            <div className="mt-8 grid gap-4">
              {items.map((it, i) => (
                <motion.div key={it.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4">
                  <it.icon className="mt-1 h-5 w-5 text-fuchsia-600" />
                  <div>
                    <p className="font-semibold text-gray-900">{it.title}</p>
                    <p className="text-sm text-gray-600">{it.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-fuchsia-500/20 via-white to-cyan-400/20 blur-2xl" />
            <img className="w-full rounded-2xl border border-gray-200" src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1400&auto=format&fit=crop" alt="Benefits" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
