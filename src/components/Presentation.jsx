import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap"

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
        markers: true,
      },
    })
  }, [])

  return <section id="presentation" className="w-full h-svh flex items-center justify-center relative">
    <div className="max-w-3xl text-3xl text-justify">
      <p data-lag="0" className="mb-4">I have degrees in Science and Technology as well as in Production Engineering, both from the Federal Rural University of the Semi-Arid Region in Brazil.</p>
      <p data-lag="0.2" className="mb-4">Passionate about technology, I've always been driven to find solutions that help companies enter the digital world. That journey eventually led me to dive deep into the world of programming.</p>
      <p data-lag="0.4">From working independently to becoming a full-time team member, I've been building my career as a web developer for over five years, working with both backend and frontend technologies.</p>
    </div>
  </section>
}
