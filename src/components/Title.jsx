import { motion } from 'framer-motion';

import Typewriter from './Typewriter';

export default function Title({ title, description, subtitle }) {
  return <div className="text-xs">
    <motion.h1
      className="text-base uppercase tracking-[0.5em]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1] }}
      transition={{ delay: 1, duration: 1, ease: "anticipate" }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h1>
    <motion.div
      className="mt-1 brightness-70"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {description}
    </motion.div>
    <Typewriter
      className="mt-2 brightness-40"
      initialDelay={1.2}
      text={subtitle}
    />
  </div>
}
