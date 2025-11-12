import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Programs', href: '#programs' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Process', href: '#process' },
    { label: 'Results', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 to-transparent backdrop-blur-xl" />
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 blur-md opacity-70" />
            <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-white shadow-sm">
              <Sparkles className="h-5 w-5 text-fuchsia-600" />
            </div>
          </div>
          <span className="font-semibold tracking-tight text-gray-900">Elevate Coaching</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#cta" className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition-colors">
            Free Strategy Call
          </a>
        </div>

        <button onClick={() => setOpen(true)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-100">
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 240, damping: 24 }}
              className="ml-auto h-full w-80 bg-white p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">Menu</span>
                <button className="p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-6 grid gap-3">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-xl border border-gray-200 p-3 text-gray-700 hover:bg-gray-50">
                    {item.label}
                  </a>
                ))}
                <a href="#cta" onClick={() => setOpen(false)} className="rounded-xl bg-gray-900 p-3 text-center font-semibold text-white">
                  Free Strategy Call
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
