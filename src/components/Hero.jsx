import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-600 backdrop-blur">
              <Star className="h-3.5 w-3.5 text-amber-500" />
              Lifestyle Coaching that Guarantees Transformation
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            >
              Elevate Your Life with a Plan That Actually Sticks
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-5 text-lg leading-relaxed text-gray-600"
            >
              Personalized coaching across habits, nutrition, mindset, and performance. We combine data, accountability, and proven frameworks to deliver real change—fast.
            </motion.p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white font-semibold shadow-lg shadow-gray-900/10 hover:bg-gray-800">
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#programs" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 hover:bg-gray-50">
                Explore Programs
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />Money-Back Guarantee</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" />Weekly Accountability</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-fuchsia-500/20 via-white to-cyan-400/20 blur-2xl" />
            <div className="rounded-3xl border border-gray-200 bg-white/60 p-2 backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1549049950-48d5887197bc?q=80&w=1600&auto=format&fit=crop"
                alt="Coaching"
                className="h-80 w-full rounded-2xl object-cover sm:h-[28rem]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
