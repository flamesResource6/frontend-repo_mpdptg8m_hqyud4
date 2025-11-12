import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: '$149/mo', desc: 'Perfect for getting momentum.', cta: 'Join Starter' },
  { name: 'Pro', price: '$349/mo', desc: 'Most popular for serious change.', cta: 'Join Pro', featured: true },
  { name: 'VIP', price: '$899/mo', desc: 'High-touch, premium coaching.', cta: 'Join VIP' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple Pricing</h2>
          <p className="mt-3 text-gray-600">Cancel anytime. Pause when life gets busy.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`rounded-2xl border p-6 ${t.featured ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200 bg-white'}`}>
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm opacity-80">{t.desc}</p>
              <p className="mt-4 text-3xl font-extrabold">{t.price}</p>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2 font-semibold ${t.featured ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>{t.cta}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
