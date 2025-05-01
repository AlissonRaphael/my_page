import { Braces, Mars, MapPin, GraduationCap, User } from "lucide-react"
import { delay, motion } from "framer-motion"

import Avatar from '../assets/avatar.jpg'

export default function Bio() {
  return <div className="p-8 w-screen flex flex-col">
    <div className="mt-8 flex items-center justify-end">
      <div className="h-[1px] bg-gray-800 w-100 mr-2"></div>
      <div className="bg-main w-9 h-6 rounded-tl-xl rounded-br-lg flex items-center justify-center mr-2">
        <User size={16} className="stroke-gray-950" />
      </div>
      <h1 className="text-gray-100 text-2xl poppins-bold uppercase">
        bio
      </h1>
    </div>

    <div className="text-xs text-gray-500 text-right">
      /profile
    </div>

    {/* <div className="mt-2 text-xs text-gray-300">
      My background, story, and a brief summary of my experience as a developer.
    </div> */}

    <div className="mt-0 p-4 flex justify-between border-b border-gray-700">
      <div className="flex">
        <div className="overflow-hidden rounded-full">
          <motion.img
            className="w-12 h-12"
            src={Avatar}
            alt="Alisson profile picture"
            initial={{ opacity: 0, scale: 2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <motion.div
          className="ml-4 flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          variants={list}
        >
          <motion.div
            className="text-gray-100 text-xl"
            variants={{
              hidden: { opacity: 0, x: -5 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={itemTransition}
          >
            Alisson Oliveira
          </motion.div>
          <motion.div
            className="text-xs text-gray-400"
            variants={{
              hidden: { opacity: 0, x: -5 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={itemTransition}
          >
            Fullstack Developer
          </motion.div>
        </motion.div>
      </div>

      {/* <div className="mt-1 bg-main rounded-full w-8 h-8 flex items-center justify-center">
        <Braces size={16} className="stroke-gray-950" />
      </div> */}
    </div>

    <motion.div
      className="text-gray-300 p-4 text-sm text-justify indent-8 hyphens-auto border-b border-gray-700"
      initial="hidden"
      whileInView="visible"
      variants={list}
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
