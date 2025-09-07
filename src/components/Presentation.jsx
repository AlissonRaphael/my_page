import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

export default function Presentation() {
  useGSAP(() => {
    const text = new SplitText("#presentation", { type: "words,chars" })

    gsap.from(text.words, {
      opacity: 0.3,
      stagger: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: "#presentation",
        scroller: "#smooth-wrapper",
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
      },
    })
  }, [])

  return <section className="w-full h-svh relative">
    <div id="presentation" className="w-full h-full flex items-center justify-center">
      <div className="max-w-2xl px-4 text-justify">
        <h1 className="font-[FreightBig] italic text-2xl sm:text-3xl md:text-4xl">
          Hello<span className="not-italic uppercase"> and </span>welcome!</h1>
        <p className="font-light text-base sm:text-lg md:text-xl">
          On this page, you'l find a few details about my journey as a full-stack developer. Feel free to explore. If you ever need assistance or would like to get in touch, you'll find all the ways to reach me further down the page.</p>
      </div>
    </div>
  </section>
}
