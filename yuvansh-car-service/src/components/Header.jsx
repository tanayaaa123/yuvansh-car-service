import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "#", label: "Home" },
  { href: "#fleet", label: "Fleet" },
  { href: "#offers", label: "Offers" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ onBook }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 border-b border-white/10 transition-all duration-300 ${
        scrolled ? "bg-navy-deep/95 backdrop-blur-md shadow-lg" : "bg-navy-deep"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-5 md:px-8 py-3.5">
        <a href="#" className="flex items-center gap-3 justify-self-start text-white">
          <motion.img
            whileHover={{ scale: 1.08, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
            src="/Yuvansh.jpg"
            alt="Yuvansh Car Service logo"
            className="w-11 h-11 rounded-full object-cover"
          />
          <span className="leading-none">
            <span className="block font-display font-bold text-lg">Yuvansh</span>
            <span className="block mt-1 text-[10px] font-bold tracking-[0.18em] text-slate-300">
              CAR SERVICE
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 justify-self-center">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="text-sm font-semibold text-slate-200 hover:text-white relative group transition-colors"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-200 rounded-full" />
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:flex items-center justify-self-end">
          <motion.button
            onClick={() => onBook("Any car")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="bg-brand-orange hover:bg-brand-orangedeep text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-orange transition-colors"
          >
            Book Now
          </motion.button>
        </div>

        <button
          className="md:hidden justify-self-end text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={menuOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-navy-deep"
          >
            <div className="px-5 pb-5 pt-3 flex flex-col gap-4">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold text-slate-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => { setMenuOpen(false); onBook("Any car"); }}
                className="bg-brand-orange text-white font-bold text-sm px-5 py-3 rounded-full text-center"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
