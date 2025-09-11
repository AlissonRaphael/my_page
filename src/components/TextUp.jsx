import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

export default function TextUp({ animationOptions = {}, scrollTriggerOptions = {}, children }) {
  const textRef = useRef(null)

  useGSAP(() => {
    const text = new SplitText(textRef.current, { type: "words,chars" })

    gsap.from(text.words, {
      y: 120,
      stagger: 0.1,
      duration: 1.5,
      ease: "power3.out",
      ...animationOptions,
      scrollTrigger: {
        trigger: "#text-up-container",
        scroller: "#smooth-wrapper",
        toggleActions: "play reverse play reverse",
        ...scrollTriggerOptions,
      }
    })
  }, [animationOptions, scrollTriggerOptions])

  return <div id="text-up-container" className="overflow-hidden">
    <div ref={textRef}>
      {children}
    </div>
  </div>
}
