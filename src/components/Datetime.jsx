import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Datetime() {
  const date = new Date()

  const year = date.toLocaleString('en', { year: 'numeric' })
  const month = date.toLocaleString('en', { month: 'short' })
  const day = date.toLocaleString('en', { day: '2-digit' })
  const hour = date.toLocaleString('en', { hour: 'numeric', hour12: false })

  useGSAP(() => {
    return gsap.to('.datetime', {
      keyframes: {
        opacity: [0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1],
      },
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: "#datetime-wrapper",
        scroller: "#smooth-wrapper",
      },
      stagger: {
        amount: 0.2, 
        from: "random",
      }
    })
  }, [])

  return <div id="datetime-wrapper" className="absolute insert-x-0 bottom-1 md:bottom-4 z-10 w-full p-4 flex justify-around items-center text-white">
    <div className="datetime" data-lag="1.5">
      {hour}h
    </div>
    <div className="datetime" data-lag="0">
      {day} {month.toLowerCase()}
    </div>
    <div className="datetime" data-lag="0.8">
      {year}
    </div>
  </div>
}
