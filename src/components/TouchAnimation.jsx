import { Pointer } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Touch() {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(true))

    return () => {
      window.removeEventListener("scroll", () => setScroll(true))
    }
  }, [])

  if (scroll) {
    return null
  }

  return <div className="absolute inset-y-0 right-0 pr-8 flex">
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 5, ease: "easeOut" }}
    >
      <motion.div
        className="w-6 h-6"
        animate={{ rotate: [-45, -50, -50, -5], translateY: [0, 2, 2, -20] }}
        transition={transition}
      >
        <Pointer className="stroke-gray-300" size={22} />
      </motion.div>
      <motion.div
        className="pl-1 text-xs text-gray-300"
        animate={{ translateY: [0, 2, 2, -20], }}
        transition={transition}
      >
        explore
      </motion.div>
    </motion.div>
  </div>
}

const transition = {
  duration: 1.2,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeOut",
}
