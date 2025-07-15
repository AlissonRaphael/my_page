import { motion } from 'framer-motion';

export default function Datetime() {
  const date = new Date()

  const year = date.toLocaleString('en', { year: 'numeric' })
  const month = date.toLocaleString('en', { month: 'short' })
  const day = date.toLocaleString('en', { day: '2-digit' })
  const hour = date.toLocaleString('en', { hour: 'numeric', hour12: false })

  return <motion.div className="w-full flex justify-between items-center">
    <motion.div {...animationsProps()}>
      {hour}h
    </motion.div>
    <motion.div {...animationsProps()}>
      {day} {month.toLowerCase()}
    </motion.div>
    <motion.div {...animationsProps()}>
      {year}
    </motion.div>
  </motion.div>
}

const animationsProps = () => ({
  initial: { opacity: 0 },
  whileInView: { opacity: [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1] },
  transition: { duration: 1, ease: "anticipate" },
  viewport: { once: true }
})
