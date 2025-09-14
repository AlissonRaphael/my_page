import { useMemo, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ContentFade({ animationOptions = {}, scrollTriggerOptions = {}, children }) {
  const ref = useRef(null)
  const id = useMemo(() => `container-fade-${Math.random().toString(36).substring(2, 9).toUpperCase()}`, [])

  useGSAP(() => {
    gsap.from(ref.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      ...animationOptions,
      scrollTrigger: {
        trigger: `#${id}`,
        scroller: "#smooth-wrapper",
        toggleActions: "play reverse play reverse",
        ...scrollTriggerOptions,
      }
    })
  }, [animationOptions, scrollTriggerOptions])

  return <div id={id}>
    <div ref={ref}>
      {children}
    </div>
  </div>
}
