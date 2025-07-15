import { motion, useScroll, useTransform, useSpring } from "motion/react"
import { useRef } from "react"

export default function TextScrollOut() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const right = useTransform(scrollYProgress, [0,1], ['300px', '12px'])
  const easedRight = useSpring(right, { stiffness: 100, damping: 20 });

  return <motion.div
      ref={ref}
      className="relative flex items-center w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2,
        duration: 2,
        ease: "circInOut",
      }}
    >
      <motion.div
        className="absolute text-xs text-gray-500 text-right pr-2 w-full bg-gray-950"
        style={{ right: easedRight || 0 }}
      >
        A human, buggy, but constantly updating 🤙
      </motion.div>
      <div className="bg-gray-500 w-full h-[1px]"></div>
  </motion.div>
}