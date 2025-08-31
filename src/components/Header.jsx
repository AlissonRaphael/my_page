import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
  useGSAP(() => {
    gsap.from("#header", {
      y: -40,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#header",
        scroller: "#smooth-wrapper",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      }
    })

  }, [])

  return <header id="header" className="absolute inset-x-0 top-0 z-30 w-full p-3 sm:p-6 backdrop-blur-md shadow-xs flex justify-between items-center text-white">
    <div className="font-bold font-[Poppins] text-lg tracking-[8px] bg-linear-to-b from-neutral-100 to-neutral-300 bg-clip-text text-transparent text-shadow-xl">
      <span className="italic font-medium">ali</span>sson
    </div>
    <ul className="flex gap-5 md:gap-8 items-center font-light text-xs md:text-sm">
      <li><a href="/#start">start</a></li>
      <li><a href="/#about">about</a></li>
      <li><a href="/#repo">repos</a></li>
    </ul>
  </header>
}
