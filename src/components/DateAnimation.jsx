import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react"
import { useRef } from "react"

export default function DateAnimation() {
  const date = new Date()

  const month = date.toLocaleString('en', { month: 'short' })
  const day = date.toLocaleString('en', { day: '2-digit' })
  const dayOfWeek = date.toLocaleString('en', { weekday: 'narrow' })
  const hour = date.toLocaleString('en', { hour: 'numeric', hour12: false })

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"]
  })

  const opacity = useTransform(scrollYProgress, [0,1], [1, 0])
  useMotionValueEvent(scrollYProgress, "change", (latest) => console.log(latest))

  return <motion.div
    ref={ref} className="w-full flex justify-between items-center"
    style={{ opacity }}
  >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1] }}
      transition={{ delay: 3, duration: 0.9, ease: "anticipate" }}
      viewport={{ once: true }}
    >
      {month.toLowerCase()}
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1] }}
      transition={{ delay: 3, duration: 1.3, ease: "anticipate" }}
      viewport={{ once: true }}
    >
      {day}{dayOfWeek.toLowerCase()}
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1] }}
      transition={{ delay: 3, duration: 1.1, ease: "anticipate" }}
      viewport={{ once: true }}
    >
      {hour}h
    </motion.div>
  </motion.div>
}