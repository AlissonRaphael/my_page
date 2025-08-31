import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

import "./styles/index.css";

export default function App() {
  useGSAP(() => {
    const activeSmoother = window.innerWidth >= 640

    const smoother = ScrollSmoother.create({
      smooth: activeSmoother ? 2 : 0,
      effects: true,
      normalizeScroll: true,
    })

    const handleLoad = () => ScrollTrigger.refresh()
    window.addEventListener("load", handleLoad)

    return () => {
      window.removeEventListener("load", handleLoad)
      smoother.kill()
    }
  }, [])


  return <div id="smooth-wrapper">
    <div id="smooth-content">
    </div>
  </div>
}
