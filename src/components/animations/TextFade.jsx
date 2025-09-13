import { useMemo, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

export default function TextFade({ animationOptions = {}, scrollTriggerOptions = {}, children }) {
  const textRef = useRef(null)
  const id = useMemo(() => `text-fade-${Math.random().toString(36).substring(2, 9).toUpperCase()}`, [])

  useGSAP(() => {
    const text = new SplitText(textRef.current, { type: "chars" })

    gsap.from(text.chars, {
      x: -50,
      opacity: 0.5,
      ease: "steps(1)",
      stagger: {
        each: 0.05,
        amount: 0.7,
        from: "random",
      },
      ...animationOptions,
      scrollTrigger: {
        trigger: `#${id}`,
        scroller: "#smooth-wrapper",
        toggleActions: "play reverse play reverse",
        ...scrollTriggerOptions,
      }
    })
  }, [animationOptions, scrollTriggerOptions, id])

  return <div id={id} className="overflow-hidden opacity-100">
    <div ref={textRef}>
      {children}
    </div>
  </div>
}
