import { motion } from 'framer-motion';

import Typewriter from './Typewriter';

export default function TitleRight({ title, description, subtitle }) {
  return <div className="flex flex-col text-xs items-end">
    <motion.h1
      className="text-gray-100 uppercase tracking-[0.4em]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1] }}
      transition={{ duration: 1, ease: "anticipate" }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h1>
    <motion.div
      className="text-gray-300 mt-2 max-w-10/12 text-right"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {description}
    </motion.div>
    <Typewriter
      className="text-gray-500 mt-2 max-w-10/12 "
      initialDelay={1.2}
      text={subtitle}
    />
  </div>
}
