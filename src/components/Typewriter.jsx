import { motion } from "framer-motion";

export default function Typewriter({ text, className, initialDelay }) {
  const textArray = text.split("");
  let delay = initialDelay || 0.3

  return <div className={className}>
    {textArray.map((char, index) => {
      delay = delay + Math.random() * (0.3 - 0.05) + 0.1
      return <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, ease: 'anticipate', duration: 0.4 }}
      >
        {char}
      </motion.span>
    })}
  </div>
}
