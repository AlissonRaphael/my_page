import { DynamicIcon } from "lucide-react/dynamic";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ExploreAnimation() {
  useGSAP(() => {
    gsap.from("#scroll-status-box", {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    })


    const isMobile = window.innerWidth < 960
    const translateY = isMobile ? [0, 10, 10, -20] : [0, 15]
    const ease = isMobile ? "power1.inOut" : "circ.in"

    gsap.to("#scroll-status-icon", {
      keyframes: {
        opacity: 1,
        rotate: isMobile ? [-45, -55, -55, -5] : [],
        translateY,
        ease,
      },
      duration: isMobile ? 1.2 : 0.5,
      repeat: -1,
      yoyo: true,
    })

    gsap.to("#scroll-status-text", {
      keyframes: {
        translateY,
        ease,
      },
      duration: isMobile ? 1.2 : 0.5,
      repeat: -1,
      yoyo: true,
    })

    gsap.fromTo("#scroll-status-box", {
      opacity: 1
    }, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#scroll-status-box",
        scroller: "#smooth-wrapper",
        start: isMobile ? "top center" : "top top",
        end: isMobile ? "bottom top" : "bottom center",
        scrub: true,
      }
    })
  }, [])

  return <div className="absolute z-10 inset-x-0 bottom-40 flex justify-center">
    <div id="scroll-status-box" className="flex items-center">
      <div id="scroll-status-icon" className="w-6 h-6">
        <DynamicIcon name={window.innerWidth < 960 ? 'pointer' : 'mouse'} className="stroke-white" size={22} />
      </div>
      <div id="scroll-status-text" className="pl-1 text-xs text-white">
        explore
      </div>
    </div>
  </div>
}
