import { motion } from "framer-motion";

export default function Typewriter({ text, className, initialDelay, once = true }) {
  const textArray = text.split("");
  let delay = initialDelay || 0

  return <div className={className}>
    {textArray.map((char, index) => {
      delay = delay + Math.random() * (0.1 - 0.05) + 0.1
      return <motion.span
        key={index}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay, ease: 'anticipate', duration: 0.1 }}
        viewport={{ once }}
      >
        {char}
      </motion.span>
    })}
  </div>
}
