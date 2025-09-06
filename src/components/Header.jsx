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

  return <header id="header" className="absolute inset-x-0 top-0 z-30 p-2 w-full flex flex-col justify-between items-center text-white backdrop-blur-lg">
    <div className="font-extrabold uppercase flex items-center justify-between w-full text-[2.5rem] leading-[2rem] sm:text-[4rem] sm:leading-[3rem] md:text-[5rem] md:leading-[3.8rem] lg:text-[6rem] lg:leading-[4.5rem] xl:text-[7rem] xl:leading-[5.4rem] 2xl:text-[8rem] 2xl:leading-[6rem]">
      <span className="text-main">a</span>
      <span className="text-main">l</span>
      <span className="text-main">i</span>
      <span className="text-main">s</span>
      <span className="text-main">s</span>
      <span className="text-main">o</span>
      <span className="text-main">n</span>
      <span className="text-main">*</span>
      <span>o</span>
      <span>l</span>
      <span>i</span>
      <span>v</span>
      <span>e</span>
      <span>i</span>
      <span>r</span>
      <span>a</span>
      <span>.</span>
    </div>
    <ul className="mt-2 md:mt-4 w-full flex gap-1 sm:gap-2 lg:gap-4 items-center justify-between text-[0.7rem] leading-[0.6rem] md:text-xs md:leading-[0.75rem]">
      <li className="pt-[0.25rem] md:pt-[0.5rem] w-full border-t-1 border-white hidden sm:block">
        <span>Published in 2025.</span>
      </li>
      <li className="pt-[0.25rem] md:pt-[0.5rem] w-full border-t-1 border-white uppercase flex items-center">
        <div className="h-full w-[4px] md:w-[6px] bg-white rounded-[1px] mr-[0.25rem] md:mr-[0.5rem]">.</div>
        <a href="/#start">start</a>
      </li>
      <li className="pt-[0.25rem] md:pt-[0.5rem] w-full border-t-1 border-white uppercase flex items-center">
        <div className="h-full w-[4px] md:w-[6px] bg-white rounded-[1px] mr-[0.25rem] md:mr-[0.5rem]">.</div>
        <a href="/#about">about</a>
      </li>
      <li className="pt-[0.25rem] md:pt-[0.5rem] w-full border-t-1 border-white uppercase flex items-center">
        <div className="h-full w-[4px] md:w-[6px] bg-white rounded-[1px] mr-[0.25rem] md:mr-[0.5rem]">.</div>
        <a href="/#repo">repos</a>
      </li>
    </ul>
  </header>
}
