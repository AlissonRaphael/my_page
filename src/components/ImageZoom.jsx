import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "motion/react"
import { useRef } from "react"

export default function ImageZoom({ src, alt }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0,1], [1, 4])
  useMotionValueEvent(scrollYProgress, "change", (latest) => console.log(latest))
  const easedScale = useSpring(scale, { stiffness: 100, damping: 20 });

  return <div ref={ref} className="overflow-hidden h-full w-full">
    <motion.img
      src={src}
      alt={alt}
      className="object-cover origin-center h-full w-full"
      style={{ scale: easedScale }}
      initial={{ scale: 1.5 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 1,
        ease: "circOut",
      }}
    />
  </div>
}