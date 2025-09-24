import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SiBootstrap, SiCreatereactapp, SiElasticsearch, SiExpress, SiNebula, SiNodedotjs, SiPostgresql, SiReact, SiReactquery, SiReactrouter, SiSequelize, SiStorybook, SiStyledcomponents, SiTailwindcss } from "@icons-pack/react-simple-icons" 

import S3 from "../assets/icons/amazons3.svg"
import BullMQ from "../assets/icons/bullmq.svg"

export default function Curriculum() {
  useGSAP(() => {
    const isMobile = window.innerWidth <= 768

    const curriculumTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#curriculum-container",
        scroller: "#smooth-wrapper",
        pin: true,
        scrub: true,
        start: "top top",
        end: `+=${(isMobile ? 8 : 4)*window.innerHeight}`,
      }
    })

    curriculumTimeline.fromTo("#curriculum-main", {
      left: 0
    }, {
      left: `-${(isMobile ? 7 : 3)*window.innerWidth}px`,
    })
  }, [])

  return <div id="curriculum-container" className="overflow-hidden h-svh flex justify-center relative">
    <div id="curriculum-main" className="absolute left-0 top-0 w-[800svw] md:w-[400svw] h-svh flex flex-row">
      <section className="w-[200svw] md:w-svw h-svh relative">
        <Ruler title="2022 - current" />
        <SectionOne />
      </section>
      <section className="w-[200svw] md:w-svw h-svh relative">
        <Ruler title="2021 - 2022" />
        <SectionTwo />
      </section>
      <section className="w-[200svw] md:w-svw h-svh relative">
        <Ruler title="2021" />
        <SectionTree />
      </section>
      <section className="w-[200svw] md:w-svw h-svh relative">
        <Ruler title="2020" />
        <SectionFour />
      </section>
    </div>
  </div>
}

function Ruler({ title }) {
  return <div className="w-full h-full absolute inset-0 top-0">
    <div className="relative w-full h-full">
      <div className="absolute inset-0 top-0 w-full pt-1 border-t-1 opacity-50 flex justify-center font-light">
        {title}
      </div>
      <div className="absolute inset-0 top-0 w-full flex flex-row">
        <span className="h-1 w-1/6 border-r-1 opacity-35"></span>
        <span className="h-1 w-1/6 border-r-1 opacity-35"></span>
        <span className="h-2 w-1/6 border-r-1 opacity-50"></span>
        <span className="h-1 w-1/6 border-r-1 opacity-35"></span>
        <span className="h-1 w-1/6 border-r-1 opacity-35"></span>
        <span className="h-2 w-1/6 border-r-1 opacity-50"></span>
      </div>
      <div className="absolute inset-0 top-0 w-full h-full flex flex-row">
        <span className="h-full w-1/6 border-r-1 opacity-10"></span>
        <span className="h-full w-1/6 border-r-1 opacity-10 border-dashed"></span>
        <span className="h-full w-1/6 border-r-1 opacity-10"></span>
        <span className="h-full w-1/6 border-r-1 opacity-10 border-dashed"></span>
        <span className="h-full w-1/6 border-r-1 opacity-10"></span>
        <span className="h-full w-1/6 border-r-1 opacity-10 border-dashed"></span>
      </div>
    </div>
  </div>
}

function SectionOne() {
  return <div className="w-full h-full flex justify-center">
    <div className="p-4 w-svw md:w-full max-w-xl flex flex-col justify-center">
      <h2 className="font-[FreightBig] italic text-xl sm:text-2xl md:text-3xl mb-2">
        mid-level<span className="not-italic uppercase"> software developer </span> at ifficient
      </h2>
      <div className="font-light text-sm md:text-base opacity-75">
        <ul className="flex flex-col gap-2 text-justify break-normal">
          <li>
            Contributed to the implementation of a drag-and-drop page builder using <span className="text-nowrap"><SiReact {...PROPS} />React</span>, <span className="text-nowrap"><SiTailwindcss {...PROPS} />TailwindCSS</span>, and <span className="text-nowrap"><SiNebula style={{ rotate: "35deg" }} {...PROPS} />Craft.js</span>.
          </li>
          <li>
            Helped refactor the entire data-layer of the admin system with <span className="text-nowrap"><SiReactquery {...PROPS} />ReactQuery</span> and <span className="text-nowrap"><SiReactrouter {...PROPS} />ReactRouter</span>.
          </li>
          <li>
            Refactored a batch data-processing ETL into real-time queue processing using <span className="text-nowrap"><img src={BullMQ} className="invert size-5 ml-[0.07rem] mr-[0.1rem] inline-flex" />BullMQ</span>.
          </li>
          <li>
            Implemented a high-volume data export pipeline with <span className="text-nowrap"><img src={BullMQ} className="invert size-5 ml-[0.07rem] mr-[0.1rem] inline-flex" />BullMQ</span>, <span className="text-nowrap"><SiNodedotjs {...PROPS} /> Node-Streams</span>, and <span className="text-nowrap"><img src={S3} className="invert size-3 ml-[0.07rem] mr-[0.1rem] inline-flex" />AmazonS3</span>.
          </li>
          <li>
            Migrated API to support partner integrations, improving the security layer and standardizing endpoints with <span className="text-nowrap"><SiExpress {...PROPS} />Express</span>.
          </li>
        </ul>
      </div>
      <div className="flex justify-center tracking-[0.25rem] opacity-75">...</div>
    </div>
  </div>
}

function SectionTwo() {
  return <div className="w-full h-full flex justify-center">
    <div className="p-4 w-svw md:w-full max-w-xl flex flex-col justify-center">
      <h2 className="font-[FreightBig] italic text-xl sm:text-2xl md:text-3xl mb-2">
        associate<span className="not-italic uppercase"> at ifficient</span> 
      </h2>
      <div className="font-light text-sm md:text-base opacity-75">
        <ul className="flex flex-col gap-2 text-justify break-normal">
          <li>
            Actively worked on projects focused on marketing and paid traffic, implementing new features, fixing bugs, and maintaining/refactoring legacy systems.
          </li>
          <li>
            Added new features, built new screens, and refactored legacy UI using <span className="text-nowrap"><SiReact {...PROPS} />React</span>, <span className="text-nowrap"><SiBootstrap {...PROPS} />Bootstrap</span>, <span className="text-nowrap"><SiReactrouter {...PROPS} />ReactRouter</span>, <span className="text-nowrap"><SiCreatereactapp {...PROPS} />React-Formsy</span>,<span className="text-nowrap"><SiReact {...PROPS} />React-DND</span>, etc.
          </li>
          <li>
            Worked directly with <span className="text-nowrap"><SiNodedotjs {...PROPS} /> Node.js</span>, <span className="text-nowrap"><SiExpress {...PROPS} />Express</span>, <span className="text-nowrap"><SiSequelize {...PROPS} />Sequelize</span>, <span className="text-nowrap"><SiPostgresql {...PROPS} />PostgresSQL</span>, and <span className="text-nowrap"><SiElasticsearch {...PROPS} />Elasticsearch</span>, both implementing new features and maintaining the API.
          </li>
        </ul>
      </div>
      <div className="flex justify-center tracking-[0.25rem] opacity-75">...</div>
    </div>
  </div>
}

function SectionTree() {
  return <div className="w-full h-full flex justify-center">
    <div className="p-4 w-svw md:w-full max-w-xl flex flex-col justify-center">
      <h2 className="font-[FreightBig] italic text-xl sm:text-2xl md:text-3xl mb-2">
        <span className="not-italic uppercase">Smaller</span> projects / freelance
      </h2>
      <div className="font-light text-sm md:text-base opacity-75">
        <ul className="flex flex-col gap-2 text-justify break-normal">
          <li>
            Handled ad-hoc requests for implementing new features and fixing bugs.
          </li>
          <li>
            Migrated legacy React systems by refactoring class components into functional components with <span className="text-nowrap"><SiReact {...PROPS} />React Hooks</span>.
          </li>
          <li>
            Helped implement a design system using <span className="text-nowrap"><SiStyledcomponents {...PROPS} />Styled Components</span> and <span className="text-nowrap"><SiStorybook {...PROPS} />Storybook</span>
          </li>
        </ul>
      </div>
      <div className="flex justify-center tracking-[0.25rem] opacity-75">...</div>
    </div>
  </div>
}

function SectionFour() {
  return <div className="w-full h-full flex justify-center">
    <div className="p-4 w-svw md:w-full max-w-xl flex flex-col justify-center">
      <h2 className="font-[FreightBig] italic text-xl sm:text-2xl md:text-3xl mb-2">
        education
      </h2>
      <div className="font-light text-sm md:text-base opacity-75">
        <ul className="flex flex-col gap-2 text-justify break-normal">
          <li>
            Bachelor's degrees in Science & Technology and Production Engineering from the Federal Rural University of the Semi-Arid (UFERSA), Brazil.
          </li>
          <li>
            Coursework included calculus, multivariable calculus, numerical analysis, computer programming, linear programming, computational simulation, among others.
          </li>
        </ul>
      </div>
    </div>
  </div>
}

const PROPS = {
  size: window.innerWidth <= 768 ? 12 : 16,
  color: "white",
  className: "ml-[0.07rem] mr-[0.15rem] inline-flex"
}
