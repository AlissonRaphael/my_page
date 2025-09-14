import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function Curriculum() {
  useGSAP(() => {
    const curriculumTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#curriculum-container",
        scroller: "#smooth-wrapper",
        pin: true,
        scrub: true,
        start: "top top",
        end: `+=${4*window.innerHeight}`,
        snap: 1/3,
      }
    })

    curriculumTimeline.fromTo("#curriculum-main", {
      left: 0
    }, {
      left: `-${3*window.innerWidth}px`,
    })
  }, [])

  return <div id="curriculum-container" className="overflow-hidden h-svh flex justify-center relative">
    <div id="curriculum-main" className="absolute left-0 top-0 w-[400svw] h-svh flex flex-row">
      <section className="w-screen h-svh">
        .
      </section>
      <section className="w-screen h-svh">
        .
      </section>
      <section className="w-screen h-svh">
        .
      </section>
      <section className="w-screen h-svh">
        .
      </section>
    </div>
  </div>
}
