import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

export default function Presentation() {
  useGSAP(() => {
    const text = new SplitText("#presentation", { type: "words,chars" })

    gsap.from(text.chars, {
      opacity: 0.4,
      stagger: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: "#presentation",
        scroller: "#smooth-wrapper",
        start: "top 60%",
        end: "bottom bottom",
        scrub: true,
      },
    })
  }, [])

  return <section className="w-full h-svh relative">
    <div id="presentation" className="w-full h-full flex items-center justify-center">
      <div className="max-w-2xl px-4 md:px-8 lg:px-0 text-lg md:text-xl lg:text-xl text-justify">
        <h1 className="font-[FreightBig] italic text-4xl">
          Hello<span className="not-italic uppercase">and</span>welcome!</h1>
        <p>On this page, you'l find a few details about my journey as a full-stack developer. Feel free to explore. If you ever need assistance or would like to get in touch, you'll find all the ways to reach me further down the page.</p>
      </div>
    </div>
    {/* <div className="absolute inset-0 z-30 w-full h-full p-6 hidden md:flex items-center justify-between text-2xl">
      <div className="flex flex-col">
        <span className="font-[HelveticaNow] text-7xl leading-[2.5rem]">00</span>
        <span className="text-xs opacity-50">home</span>
      </div>
      <div className="flex flex-col">
        <span className="font-[HelveticaNow] text-7xl leading-[2.5rem]">02</span>
        <span className="text-xs opacity-50">repos</span>
      </div>
    </div> */}
  </section>
}
