import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Social({ id, title, url, Icon, description }) {
  const containerRef = useRef(null)
  const iconRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const linkRef = useRef(null)

  useGSAP(() => {
    const scrollTrigger = {
      trigger: containerRef.current,
      scroller: "#smooth-wrapper",
    }

    gsap.from(iconRef.current, {
      opacity: 0,
      rotateZ: 180,
      transformOrigin: "0% 0%",
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger,
    })

    gsap.from(titleRef.current, {
      opacity: 0,
      x: -50,
      duration: 1.5,
      delay: 0.5,
      ease: "power4.out",
      scrollTrigger,
    })

    gsap.from(descriptionRef.current, {
      opacity: 0,
      x: -50,
      duration: 1.5,
      delay: 1,
      ease: "power4.out",
      scrollTrigger,
    })

    gsap.from(linkRef.current, {
      opacity: 0,
      x: -50,
      duration: 1.25,
      delay: 1.25,
      ease: "power4.out",
      scrollTrigger,
    })
  }, [containerRef, iconRef, titleRef, descriptionRef, linkRef])

  return <div ref={containerRef} className="py-3 lg:py-4 display flex items-start justify-between">
    <div ref={iconRef} className="w-2/12 mt-2">
      <Icon size={16} color="#fff" />
    </div>

    <div ref={titleRef} className="w-4/12 lg:w-5/12 xl:w-4/12 text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl leading-none flex flex-col">
      <div className="font-[FreightBig] italic lowercase mb-1">{title}</div>
      <div className="capitalize">{id}</div>
    </div>

    <div className="w-7/12 lg:w-6/12 xl:w-7/12 mt-1 flex flex-col gap-2 text-neutral-400">
      <p ref={descriptionRef} className="text-xs sm:text-sm text-justify hyphens-auto">
        {description}
      </p>
      <a ref={linkRef} href={url} className="text-xs tracking-[0.15em] text-white" target="_blank">
        <span className="border-b-1">
          view
        </span>
      </a>
    </div>
  </div>
}
