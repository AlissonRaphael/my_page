import { useMemo, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

export default function TextUp({ animationOptions = {}, scrollTriggerOptions = {}, children }) {
  const textRef = useRef(null)
  const id = useMemo(() => `text-up-${Math.random().toString(36).substring(2, 9).toUpperCase()}`, [])

  useGSAP(() => {
    const text = new SplitText(textRef.current, { type: "words" })

    gsap.from(text.words, {
      y: 120,
      stagger: 0.1,
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

  return <div id={id} className="overflow-hidden">
    <div ref={textRef}>
      {children}
    </div>
  </div>
}
