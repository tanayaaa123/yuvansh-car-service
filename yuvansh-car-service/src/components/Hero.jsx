import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero-bg"></div>

      {/* Animated Car */}
      <motion.div
        className="hero-car-bg"
        initial={{ x: 500, scale: 1.15, opacity: 0 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Orange glow */}
      <div className="hero-glow glow1"></div>
      <div className="hero-glow glow2"></div>

      {/* Moving speed lights */}
      <div className="speed speed1"></div>
      <div className="speed speed2"></div>

      <div className="hero-content-wrap">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="hero-tag">PREMIUM SELF DRIVE CARS • PUNE</p>

          <h1>
            Drive Your <span>Dream Ride</span>
          </h1>

          <p className="hero-desc">
            Luxury SUVs, Hatchbacks & Family Cars available 24×7 in Pune.
            Instant WhatsApp Booking. No Hidden Charges.
          </p>

          <div className="hero-buttons">
            <a href="#fleet" className="btn-orange">
              Explore Fleet <ChevronRight size={18} />
            </a>

            <a href="#contact" className="btn-glass">
              Book Now
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>25+</h3>
              <span>Cars</span>
            </div>

            <div>
              <h3>500+</h3>
              <span>Customers</span>
            </div>

            <div>
              <h3>24×7</h3>
              <span>Support</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-mouse">
        <span></span>
      </div>
    </section>
  );
}