import { motion } from "motion/react"

export default function IconRotation({ children }) {
  return <motion.div
    animate={{
      rotate: [0, 0, 90],
    }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
}