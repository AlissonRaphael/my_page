import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DynamicIcon } from "lucide-react/dynamic";

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
      delay: 1.5,
      duration: 1.2,
      repeat: -1,
      repeatDelay: 6,
      scrambleText: {
        text: "a",
        chars: "71",
      }
    })

    gsap.to("#o-scramble", {
      delay: 2,
      duration: 2,
      repeat: -1,
      repeatDelay: 4,
      scrambleText: {
        text: "o",
        chars: "+",
      }
    })

    gsap.to("#e-scramble", {
      delay: 1,
      duration: 1.3,
      repeat: -1,
      repeatDelay: 2,
      scrambleText: {
        text: "e",
        chars: "b4",
      }
    })

    gsap.from("#icon", {
      rotate: "259deg",
      ease: "linear",
      scrollTrigger: {
        trigger: "#title",
        scroller: "#smooth-wrapper",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    })
  }, [])

  return <div id="title" className="absolute z-10 inset-0 flex items-center justify-center">
    <div className="font-[Poppins] font-extrabold uppercase border-2 border-orange-500 text-4xl lg:p-14">
      <div className="grid grid-cols-4 grid-rows-2 justify-self-center text-center align-middle p-6 gap-y-6 gap-x-10 lg:gap-y-14 lg:gap-x-22">
        <div id="a-scramble">a</div>
        <div>l</div>
        <div>i</div>
        <div>s</div>
        <div>s</div>
        <div id="o-scramble">o</div>
        <div>n</div>
        <div id="icon" className="flex items-center justify-center">
          <DynamicIcon name="aperture" className="stroke-orange-500" size={28} />
        </div>
        <div>o</div>
        <div>l</div>
        <div>i</div>
        <div>v</div>
        <div id="e-scramble">e</div>
        <div>i</div>
        <div>r</div>
        <div>a</div>
      </div>
    </div>
  </div>
}
