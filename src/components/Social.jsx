import gsap from "gsap";
import { useMemo } from "react";
import { useGSAP } from "@gsap/react";

export default function Social({ id, title, url, Icon, description }) {
  const key = useMemo(() => ({
    container: `#${id}-social`,
    border: `#${id}-social-border`,
  }), [id])

  useGSAP(() => {
    gsap.from(key.border, {
      width: "0%",
      duration: 1,
      scrollTrigger: {
        trigger: key.container,
        scroller: "#smooth-wrapper",
        toggleActions: "play reverse play reverse",
      }
    })
  }, [key.container, key.border])

  return <div className="p-6 display flex items-start justify-between">
    <div className="w-2/12 mt-2">
      <Icon size={16} color="#fff" />
    </div>

    <div className="w-4/12 text-3xl leading-none flex flex-col">
      <div className="font-[FreightBig] italic lowercase mb-1">{title}</div>
      <div className="capitalize">{id}</div>
    </div>

    <div className="w-6/12 mt-1 flex flex-col gap-2 text-neutral-400">
      <p className="text-sm text-justify hyphens-auto">
        {description}
      </p>
      <a href={url} className="text-xs tracking-[0.15em] text-white" target="_blank">
        <span className="border-b-1">
          view
        </span>
      </a>
    </div>
  </div>
}
