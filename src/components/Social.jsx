import { motion } from "framer-motion";

import Typewriter from "./Typewriter";

export default function Social({ title, url, Icon, description }) {
  return <div className="px-4 w-full h-full">
    <motion.div
      className="w-full h-[1px] bg-neutral-700"
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 2, ease: "easeInOut" }}
    ></motion.div>

    <div className="px-4 py-6 w-full display flex items-center justify-between gap-5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 2, ease: "easeInOut" }}
      >
        <Icon size={22} color="#fff" />
      </motion.div>
      <Typewriter
        className="w-4/12 text-white text-2xl"
        text={title}
        initialDelay={0.6}
        once={false}
      />

      <div className="w-6/12 flex flex-col gap-2 text-neutral-400">
        <motion.p
          className="text-[0.60rem] text-justify hyphens-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 2, ease: "easeInOut" }}
        >
          {description}
        </motion.p>
        <Link url={url} />
      </div>
    </div>
  </div>
}

function Link({ url }) {
  return <motion.a
    href={url} className="text-xs text-right tracking-[0.15em]" target="_blank"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 2, ease: "easeInOut" }}
  >
    <span
      className="border-b-1"
    >
      view
    </span>
  </motion.a>
}
