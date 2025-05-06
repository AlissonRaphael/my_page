import { Mars, MapPin, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

import TitleRight from "./TitleRight"

export default function Bio() {
  return <div className="mt-12 w-full flex flex-col items-center relative">
    <div className="p-8 w-full max-w-6xl flex flex-col">

      <TitleRight
        title="bio"
        description="Here you'll find my projects, experiences, and a glimpse into my journey in the world of technology."
        subtitle="/bio"
      />

      <motion.div
        className="text-gray-400 p-4 text-sm text-justify indent-8 hyphens-auto border-b border-gray-800 mt-6"
        initial="hidden"
        whileInView="visible"
        variants={list}
        viewport={{ once: true }}
      >
        <motion.p className="mb-2" variants={item} transition={itemTransition}>
          Hi, I'm Alisson!
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

      <motion.div
        className="p-4"
        initial="hidden"
        whileInView="visible"
        variants={list}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-xs flex mb-1"
          variants={item}
          transition={itemTransition}
        >
          <div className="text-gray-400 w-2/5">
            Sex and age
          </div>
          <div className="text-gray-300 w-3/5 flex items-center">
            <Mars className="mr-1" size={14} />
            Male, 31
          </div>
        </motion.div>

        <motion.div
          className="text-xs flex mb-1"
          variants={item}
          transition={itemTransition}
        >
          <div className="text-gray-400 w-2/5">
            Local
          </div>
          <div className="text-gray-300 w-3/5 flex items-center">
            <MapPin className="mr-1" size={14} />
            Vale do Jaguaribe - CE, Brazil
          </div>
        </motion.div>

        <motion.div
          className="text-xs flex mb-1"
          variants={item}
          transition={itemTransition}
        >
          <div className="text-gray-400 w-2/5">
            Edu. background
          </div>
          <div className="text-gray-300 w-3/5 flex items-center">
            <GraduationCap className="mr-1" size={14} />
            Higher Education
          </div>
        </motion.div>

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
