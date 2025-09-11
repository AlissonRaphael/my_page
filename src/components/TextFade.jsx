import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

export default function TextFade({ animationOptions = {}, scrollTriggerOptions = {}, children }) {
  const textRef = useRef(null)

  useGSAP(() => {
    const text = new SplitText(textRef.current, { type: "words,chars" })

    gsap.from(text.chars, {
      x: -50,
      opacity: 0.5,
      duration: 1,
      ease: "steps(1)",
      stagger: {
        each: 0.05,
        from: "random",
      },
      ...animationOptions,
      scrollTrigger: {
        trigger: "#text-fade-container",
        scroller: "#smooth-wrapper",
        toggleActions: "play reverse play reverse",
        ...scrollTriggerOptions,
      }
    })
  }, [animationOptions, scrollTriggerOptions])

  return <div id="text-fade-container" className="overflow-hidden opacity-100">
    <div ref={textRef}>
      {children}
    </div>
  </div>
}
