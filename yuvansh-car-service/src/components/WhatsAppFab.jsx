import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { WHATSAPP_NUMBER } from '../config.js'

export default function WhatsAppFab() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      title="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.93 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg"
    >
      {/* Pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.5, 1.5], opacity: [0.6, 0, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut" }}
      />
      <MessageCircle size={26} fill="white" strokeWidth={0} className="relative z-10" />
    </motion.a>
  )
}
