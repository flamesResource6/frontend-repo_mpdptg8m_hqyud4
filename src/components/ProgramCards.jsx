import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const programs = [
  {
    title: 'Foundations Reset',
    price: '$399',
    duration: '4 Weeks',
    features: [
      'Deep habit audit',
      'Custom action plan',
      'Weekly check-ins',
      'Meal & movement templates',
    ],
  },
  {
    title: 'Momentum Builder',
    price: '$1,199',
    duration: '12 Weeks',
    features: [
      'Full lifestyle redesign',
      'Personalized nutrition & training',
      'Daily accountability',
      'Bi-weekly progress reviews',
    ],
    featured: true,
  },
  {
    title: 'Elite Transformation',
    price: '$3,500',
    duration: '24 Weeks',
    features: [
      'High-touch executive coaching',
      'Wearable data integration',
      'Mindset & performance coaching',
      'Unlimited text support',
    ],
  },
]

export default function ProgramCards() {
  return (
    <section id="programs" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Choose Your Path</h2>
          <p className="mt-3 text-gray-600">Flexible programs designed for real-world results.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative rounded-2xl border ${p.featured ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200 bg-white'} p-6 shadow-sm`}
            >
              {p.featured && (
                <span className="absolute -top-3 right-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-gray-900 shadow">Best Value</span>
              )}
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm opacity-80">{p.duration}</p>
              <p className="mt-4 text-3xl font-extrabold">{p.price}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className={`h-4 w-4 ${p.featured ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2 font-semibold ${p.featured ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>Start Now</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
