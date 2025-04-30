import { Pointer, MoveVertical } from "lucide-react"
import { motion } from "motion/react"

export default function Touch() {
  return <motion.div className="flex items-center">
    <motion.div
      className="w-6 h-6"
      animate={{
        rotate: [-45, -50, -5],
        translateY: [0, 2, -15],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeOut",
      }}
    >
      <Pointer className="stroke-gray-300" size={22} />
    </motion.div>
    <motion.div
      className="pl-1 text-xs text-gray-300"
      animate={{
        translateY: [0, 2, -15],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeOut",
      }}>
        explore
      </motion.div>
  </motion.div>
}
