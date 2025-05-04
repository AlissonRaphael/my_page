import { DynamicIcon } from "lucide-react/dynamic"
import { motion } from "framer-motion"

import Typewriter from "./Typewriter"

export default function TopicLeft({ icon, label, path }) {
  return <div>
    <div className="mt-8 flex items-center justify-start">

      <motion.div
        className="bg-main h-[24px] flex items-center justify-center mr-2"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0,1,1,1],
          minWidth: ["0px", "24px", "24px", "24px", "32px"],
          borderTopLeftRadius: ["1rem", "1rem", 0, "0.75rem"],
          borderTopRightRadius: ["1rem", "1rem", 0, 0],
          borderBottomLeftRadius: ["1rem", "1rem", 0, 0],
          borderBottomRightRadius: ["1rem", "1rem", 0, "0.75rem"],
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <DynamicIcon name={icon} size={16} className="stroke-gray-950" />
        </motion.div>
      </motion.div>

      <motion.h1
        className="text-gray-100 text-2xl poppins-bold uppercase"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {label}
      </motion.h1>

      <motion.div
        className="h-[1px] bg-gray-500 w-100 ml-2"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
      </motion.div>

    </div>

    <Typewriter
      className="text-xs text-gray-500 text-left"
      initialDelay={0.8}
      text={path}
    />
  </div>
}
