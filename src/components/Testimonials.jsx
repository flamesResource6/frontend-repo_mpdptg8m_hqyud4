import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const people = [
  {
    name: 'Alex R.',
    role: 'Founder, Remote First Co.',
    quote: 'I finally built routines that survive busy weeks. Down 18 lbs and energy is next-level.',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2?q=80&w=900&auto=format&fit=crop'
  },
  {
    name: 'Maya K.',
    role: 'Product Designer',
    quote: 'The accountability and simplicity were game-changing. Sleeping better, performing better.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop'
  },
  {
    name: 'Chris D.',
    role: 'Sales Director',
    quote: 'This wasn’t another plan—it was a system. The confidence boost is unreal.',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop'
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Real Results</h2>
          <p className="mt-3 text-gray-600">Your transformation is guaranteed. Here’s what clients say.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <img src={p.img} alt={p.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-gray-900">{p.name}</p>
                  <p className="text-sm text-gray-600">{p.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700"><Quote className="mr-1 inline-block h-4 w-4 text-fuchsia-500" />{p.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
