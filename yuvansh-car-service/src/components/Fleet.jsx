import { fleet } from '../data/fleet.js'
import CarMedia from './CarMedia.jsx'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09 },
  },
}

const card = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Fleet({ onBook }) {
  return (
    <section id="fleet" className="max-w-6xl mx-auto px-5 md:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-end justify-between gap-5 mb-10"
      >
        <div>
          <p className="text-brand-orange font-bold text-sm tracking-wide mb-2">FEATURED FLEET</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-navy">
            Drive the car you've always dreamed of
          </h2>
        </div>
        <p className="text-slate-500 max-w-sm">
          Pick a car, fill in your details, and we'll confirm your booking on WhatsApp within the hour.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {fleet.map((car) => (
          <motion.div
            key={car.id}
            variants={card}
            whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.12)" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-white border border-black/5 rounded-2xl overflow-hidden flex flex-col cursor-default"
          >
            {/* Image with zoom-on-hover */}
            <div className="h-40 overflow-hidden">
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <CarMedia car={car} />
              </motion.div>
            </div>

            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-display font-bold text-lg text-navy">{car.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{car.tagline} · {car.note}</div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal whitespace-nowrap">
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-brand-teal"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  Available
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {car.tags.map((tag) => (
                  <span key={tag} className="bg-paper text-slate-500 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-3">
                <div>
                  <b className="text-navy text-xl font-display">₹{car.price.toLocaleString('en-IN')}</b>
                  <span className="block text-[11px] text-slate-500">per day</span>
                </div>
                <motion.button
                  onClick={() => onBook(car.name)}
                  whileHover={{ scale: 1.07, backgroundColor: "#FF6B35" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-navy text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
                >
                  Book Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
