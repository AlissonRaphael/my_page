import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "motion/react"
import { useRef } from "react"

export default function ImageZoom({ src, alt }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4])
  useMotionValueEvent(scrollYProgress, "change", (latest) => console.log(latest))
  const easedScale = useSpring(scale, { stiffness: 100, damping: 20 });

  return <div ref={ref} className="overflow-hidden">
    <motion.img
      src={src}
      alt={alt}
      className="object-cover origin-center border-1  border-neutral-800"
      style={{ scale: easedScale }}
      initial={{ scale: 1.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 1.7,
        duration: 2,
        ease: "circInOut",
      }}
    />
  </div>
}