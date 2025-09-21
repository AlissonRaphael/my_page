import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SiBootstrap, SiCreatereactapp, SiElasticsearch, SiExpress, SiNebula, SiNodedotjs, SiPostgresql, SiReact, SiReactquery, SiReactrouter, SiSequelize, SiStorybook, SiStyledcomponents, SiTailwindcss } from "@icons-pack/react-simple-icons"

import S3 from "../assets/icons/amazons3.svg"
import BullMQ from "../assets/icons/bullmq.svg"

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
      <section className="w-screen h-svh relative">
        <Ruler title="2022 - current" />
        <SectionOne />
      </section>
      <section className="w-screen h-svh relative">
        <Ruler title="2021 - 2022" />
        <SectionTwo />
      </section>
      <section className="w-screen h-svh relative">
        <Ruler title="2021" />
        <SectionTree />
      </section>
      <section className="w-screen h-svh relative">
        <Ruler title="2020" />
        &nbsp;
      </section>
    </div>
  </div>
}

function Ruler({ title }) {
  return <div className="w-full h-full absolute inset-0 top-0">
    <div className="relative w-full h-full">
      <div className="absolute inset-0 top-0 w-full pt-1 border-t-1 opacity-50 flex justify-center font-[FreightBig] italic">
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
  const iconProps = { size: 16, color: "white", className: "ml-[0.07rem] mr-[0.15rem] inline-flex" }

  return <div className="p-4 w-svw h-full flex justify-center">
    <div className="w-full max-w-xl flex flex-col justify-center">
      <h2 className="font-[FreightBig] italic text-xl sm:text-2xl md:text-3xl mb-2">
        mid-level<span className="not-italic uppercase"> software developer </span> at ifficient
      </h2>
      <div className="font-light text-sm md:text-base opacity-75">
        <ul className="flex flex-col gap-2 text-justify break-normal">
          <li>
            contributed to the implementation of a drag-and-drop page builder using <span className="text-nowrap"><SiReact {...iconProps} />React</span>, <span className="text-nowrap"><SiTailwindcss {...iconProps} />TailwindCSS</span>, and <span className="text-nowrap"><SiNebula style={{ rotate: "35deg" }} {...iconProps} />Craft.js</span>.
          </li>
          <li>
            helped refactor the entire data-layer of the admin system with <span className="text-nowrap"><SiReactquery {...iconProps} />ReactQuery</span> and <span className="text-nowrap"><SiReactrouter {...iconProps} />ReactRouter</span>.
          </li>
          <li>
            refactored a batch data-processing ETL into real-time queue processing using <span className="text-nowrap"><img src={BullMQ} className="invert size-5 ml-[0.07rem] mr-[0.1rem] inline-flex" />BullMQ</span>.
          </li>
          <li>
            implemented a high-volume data export pipeline with <span className="text-nowrap"><img src={BullMQ} className="invert size-5 ml-[0.07rem] mr-[0.1rem] inline-flex" />BullMQ</span>, <span className="text-nowrap"><SiNodedotjs {...iconProps} /> Node-Streams</span>, and <span className="text-nowrap"><img src={S3} className="invert size-3 ml-[0.07rem] mr-[0.1rem] inline-flex" />AmazonS3</span>.
          </li>
          <li>
            migrated the backend API to support partner integrations, improving the security layer and standardizing endpoints with <span className="text-nowrap"><SiExpress {...iconProps} />Express</span>.
          </li>
          <li>
            and more...
          </li>
        </ul>
      </div>
    </div>
  </div>
}

function SectionTwo() {
  const iconProps = { size: 16, color: "white", className: "ml-[0.07rem] mr-[0.1rem] inline-flex" }

  return <div className="p-4 w-svw h-full flex justify-center">
    <div className="w-full max-w-xl flex flex-col justify-center">
      <h2 className="font-[FreightBig] italic text-xl sm:text-2xl md:text-3xl mb-2">
        associate<span className="not-italic uppercase"> at ifficient</span> 
      </h2>
      <div className="font-light text-sm md:text-base opacity-75">
        <ul className="flex flex-col gap-2 text-justify break-normal">
          <li>
            actively worked on projects focused on marketing and paid traffic, implementing new features, fixing bugs, and maintaining/refactoring legacy systems.
          </li>
          <li>
            on the frontend, added new features, built new screens, and refactored legacy UI using <span className="text-nowrap"><SiReact {...iconProps} />React</span>, <span className="text-nowrap"><SiBootstrap {...iconProps} />Bootstrap</span>, <span className="text-nowrap"><SiReactrouter {...iconProps} />ReactRouter</span>, <span className="text-nowrap"><SiCreatereactapp {...iconProps} />React-Formsy</span>,<span className="text-nowrap"><SiReact {...iconProps} />React-DND</span>, etc.
          </li>
          <li>
            on the backend, worked directly with <span className="text-nowrap"><SiNodedotjs {...iconProps} /> Node.js</span>, <span className="text-nowrap"><SiExpress {...iconProps} />Express</span>, <span className="text-nowrap"><SiSequelize {...iconProps} />Sequelize</span>, <span className="text-nowrap"><SiPostgresql {...iconProps} />PostgresSQL</span>, and <span className="text-nowrap"><SiElasticsearch {...iconProps} />Elasticsearch</span>, both implementing new features and maintaining the API.
          </li>
          <li>
            and more...
          </li>
        </ul>
      </div>
    </div>
  </div>
}

function SectionTree() {
  const iconProps = { size: 16, color: "white", className: "ml-[0.07rem] mr-[0.1rem] inline-flex" }

  return <div className="p-4 w-svw h-full flex justify-center">
    <div className="w-full max-w-xl flex flex-col justify-center">
      <h2 className="font-[FreightBig] italic text-xl sm:text-2xl md:text-3xl mb-2">
        associate<span className="not-italic uppercase"> at ifficient</span> 
      </h2>
      <div className="font-light text-sm md:text-base opacity-75">
        <ul className="flex flex-col gap-2 text-justify break-normal">
          <li>
            handled ad-hoc requests for implementing new features and fixing bugs.
          </li>
          <li>
            Migrated legacy React systems by refactoring class components into functional components with <span className="text-nowrap"><SiReact {...iconProps} />React Hooks</span>.
          </li>
          <li>
            Helped implement a design system using <span className="text-nowrap"><SiStyledcomponents {...iconProps} />Styled Components</span> and <span className="text-nowrap"><SiStorybook {...iconProps} />Storybook</span>
          </li>
          <li>
            and more...
          </li>
        </ul>
      </div>
    </div>
  </div>
}
