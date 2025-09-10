import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Desktop from '../assets/desktop.mp4';
import Mobile from '../assets/mobile.mp4';

export default function Video() {
  const [mobile, setMobile] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 640) {
      setMobile(true)
    }
  }, [])

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#video-container",
        scroller: "#smooth-wrapper",
        pin: true,
        scrub: true,
        start: "top top",
        end: `+=${window.innerHeight}`,
      }
    })

    videoRef.current.onloadedmetadata = () => {
      timeline.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      }, 0)
    }

    timeline.fromTo(".shadows", {
      opacity: 0.2
    }, {
      opacity: 1,
    }, 0)
  }, [])

  return <div id="video-container">
    <video
      ref={videoRef}
      src={mobile ? Mobile : Desktop}
      alt="Alisson Oliveira"
      muted
      playsInline
      preload="auto"
      className="h-svh aspect-[9/16] sm:aspect-[16/8] object-cover object-center z-0"
      style={{ willChange: "transform, currentTime" }}
    />
    <div
      id="shadow1"
      className="shadows absolute z-20 inset-0 w-screen h-svh"
      style={{
        background: "radial-gradient(circle at 50% -40%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 80%)",
        opacity: 0.2,
      }}
    ></div>
    <div
      id="shadow2"
      className="shadows absolute z-20 inset-0 w-screen h-svh"
      style={{
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
        opacity: 0.2,
      }}
    ></div>
  </div>
}
