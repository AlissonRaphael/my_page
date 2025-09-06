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
    <div className="font-extrabold uppercase text-[8rem] tracking-[1rem] leading-[6rem] w-full flex">
      <div className="flex items-center justify-between w-1/2 text-main">
        <span>a</span>
        <span>l</span>
        <span>i</span>
        <span>s</span>
        <span>s</span>
        <span>o</span>
        <span>n</span>
        <span>*</span>
      </div>
      <div className="flex items-center justify-between w-1/2">
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
    </div>
    <ul className="mt-4 w-full flex gap-4 items-center justify-between text-xs tracking-[1px]">
      <li className="pt-1 w-full border-t-1 border-white">
        <span className="opacity-70 ">Published in 2025.</span>
      </li>
      <li className="pt-1 w-full border-t-1 border-white uppercase">
        <span className="h-full w-[2px] bg-white rounded-[2px] mr-1">&ensp;</span>
        <a href="/#start">start</a>
      </li>
      <li className="pt-1 w-full border-t-1 border-white uppercase">
        <span className="h-full w-[2px] bg-white rounded-[2px] mr-1">&ensp;</span>
        <a href="/#about">about</a>
      </li>
      <li className="pt-1 w-full border-t-1 border-white uppercase">
        <span className="h-full w-[2px] bg-white rounded-[2px] mr-1">&ensp;</span>
        <a href="/#repo">repos</a>
      </li>
    </ul>
  </header>
}
