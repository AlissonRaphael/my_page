import { LazyMotion, domAnimations } from "motion/react"

export default function App() {
  return (
    <LazyMotion features={domAnimations}>
      <h1>Hello World!</h1>
    </LazyMotion>
  )
}
