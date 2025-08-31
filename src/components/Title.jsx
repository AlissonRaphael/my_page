import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Title() {
  useGSAP(() => {
    gsap.fromTo("#title", {
      opacity: 0,
    },{
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    })

    gsap.to("#a-scramble", {
      delay: 2,
      duration: 2,
      repeat: -1,
      repeatDelay: 4,
      scrambleText: {
        text: "a",
        chars: "@a7",
      }
    })

    gsap.to("#v-scramble", {
      delay: 1.5,
      duration: 1.2,
      repeat: -1,
      repeatDelay: 6,
      scrambleText: {
        text: "v",
        chars: "u",
      }
    })
  }, [])

  return <div id="title" className="absolute z-10 inset-0 flex items-center justify-center">
    <div>
      <span className="font-[Birthstone] font-bold text-5xl sm:text-5xl md:text-7xl lg:text-[6rem]">Hi! I'm </span><br />
      <div className="pl-2 sm:pl-4 md:pl-6 lg:pl-8 font-[Subjectivity] font-extrabold uppercase tracking-tighter text-7xl leading-16 sm:text-[7rem] sm:leading-24 md:text-[9rem] md:leading-30 lg:text-[12rem] lg:leading-40">
        <span className="relative">
          alisson
          <span id="a-scramble" className="absolute w-fit font-[Birthstone] -top-1 lg:-top-2 -left-2 sm:-left-4 md:-left-7 lg:-left-10 text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[24rem] font-extralight text-main">A</span>
        </span>
        <br />
        <span className="pl-12 sm:pl-20 md:pl-26 lg:pl-36 relative">
          oliveira
          <span id="v-scramble" className="absolute w-fit font-[Birthstone] -top-1 lg:-top-2 right-42 sm:right-66 md:right-82 lg:right-108 text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[24rem] font-extralight text-main">V</span>
        </span>
      </div>
    </div>
  </div>
}
