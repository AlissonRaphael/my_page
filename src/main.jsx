import { ViteReactSSG } from 'vite-react-ssg/single-page';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText, ScrambleTextPlugin)

import App from './App.jsx'

const isDev = import.meta.env.DEV

if (isDev) {
  import('react-dom/client').then(({ createRoot }) => {
    createRoot(document.getElementById('root')).render(<App />)
  })
}

export const createRoot = ViteReactSSG(<App />)
