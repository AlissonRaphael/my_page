import { motion } from "framer-motion";

export default function Social({ title, url, Icon, description }) {
  return <div className="px-4 w-full h-full">
    <div className="w-full h-[1px] bg-neutral-700"></div>

    <div className="px-4 py-6 w-full display flex items-center justify-between gap-5">
      <div className="">
        <Icon size={22} color="#fff" />
      </div>
      <span className="w-4/12 text-white text-2xl">
        {title}
      </span>

      <div className="w-6/12 flex flex-col gap-2 text-neutral-400">
        <p className="text-[0.60rem] text-justify">
          {description}
        </p>
        <Link url={url} />
      </div>
    </div>
  </div>
}

function Link({ url }) {
  return <motion.a
    href={url} className="text-xs text-right tracking-[0.15em]" target="_blank"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, ease: "easeInOut" }}
  >
    <span
      className="border-b-1 text-neutral-500"
    >
      view
    </span>
  </motion.a>
}

