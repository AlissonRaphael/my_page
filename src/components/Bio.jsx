import { motion } from "framer-motion"

import TitleLeft from "./TitleLeft"

export default function Bio() {
  return <div className="mt-12 w-full flex flex-col items-center relative">
    <div className="p-8 w-full max-w-6xl flex flex-col">

      <TitleLeft
        title="bio"
        description="My journey as a developer."
        subtitle="/bio"
      />

      <motion.div
        className="text-gray-400 text-sm text-justify hyphens-auto border-r border-gray-700 mt-8 pr-6"
        initial="hidden"
        whileInView="visible"
        variants={list}
        viewport={{ once: true }}
      >
        <motion.p className="mb-2" variants={item} transition={itemTransition}>
          Hi, I'm Alisson! <span className="text-xl">👋</span>
        </motion.p>
        <motion.p className="mb-2" variants={item} transition={itemTransition}>
          I have degrees in Science and Technology as well as in Production Engineering, both from the Federal Rural University of the Semi-Arid Region in Brazil.
        </motion.p>
        <motion.p className="mb-2" variants={item} transition={itemTransition}>
          Passionate about technology, I've always been driven to find solutions that help companies enter the digital world. That journey eventually led me to dive deep into the world of programming.
        </motion.p>
        <motion.p className="mb-2" variants={item} transition={itemTransition}>
          From working independently to becoming a full-time team member, I've been building my career as a web developer for over five years, working with both backend and frontend technologies.
        </motion.p>
      </motion.div>

    </div>
  </div>
}

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const itemTransition = {
  type: "tween",
  duration: 1,
  ease: "easeInOut",
}
