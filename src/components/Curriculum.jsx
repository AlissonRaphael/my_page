import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SiBootstrap, SiCreatereactapp, SiElasticsearch, SiExpress, SiJest, SiNebula, SiNestjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiReactquery, SiReactrouter, SiSequelize, SiStorybook, SiStyledcomponents, SiTailwindcss, SiTypescript } from "@icons-pack/react-simple-icons" 

import S3 from "../assets/icons/amazons3.svg"
import BullMQ from "../assets/icons/bullmq.svg"
import Ufersa from "../assets/icons/ufersa.png"

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
      left: 0,
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
        <Ruler title="2020 - 2021 (2023*)" />
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

function Section({ title, content }) {
    return <div className="w-full h-full flex justify-center">
    <div className="p-4 w-svw md:w-full max-w-2xl flex flex-col justify-center">
      <h2 className="font-[FreightBig] italic text-xl sm:text-2xl md:text-3xl mb-2">
        {title}
      </h2>
      <div className="font-light text-sm md:text-base opacity-75">
        <ul className="flex flex-col gap-2 text-justify break-normal">
          {content}
        </ul>
      </div>
      <div className="flex justify-center tracking-[0.20rem] opacity-75">...</div>
    </div>
  </div>
}

function SectionOne() {
  return <Section
    title={<>mid-level<span className="not-italic uppercase"> software developer </span> at ifficient</>}
    content={<>
      <li>
        Contributed to the implementation of a drag-and-drop page builder using <span className="text-nowrap"><SiReact {...PROPS} />React</span>, <span className="text-nowrap"><SiTailwindcss {...PROPS} />Tailwindcss</span> and <span className="text-nowrap"><SiNebula style={{ rotate: "35deg" }} {...PROPS} />Craft</span>.
      </li>
      <li>
        Helped refactor the entire "data-layer" of the admin system with <span className="text-nowrap"><SiReactquery {...PROPS} />ReactQuery</span> and <span className="text-nowrap"><SiReactrouter {...PROPS} />ReactRouter</span>.
      </li>
      <li>
        Refactored a batch data-processing ETL into real-time queue processing using <span className="text-nowrap"><img src={BullMQ} className="invert size-5 ml-[0.07rem] mr-[0.1rem] inline-flex" />BullMQ</span>.
      </li>
      <li>
        Implemented a high-volume data export pipeline with <span className="text-nowrap"><img src={BullMQ} className="invert size-5 ml-[0.07rem] mr-[0.1rem] inline-flex" />BullMQ</span>, <span className="text-nowrap"><SiNodedotjs {...PROPS} />Node-Streams</span> and <span className="text-nowrap"><img src={S3} className="invert size-3 ml-[0.07rem] mr-[0.1rem] inline-flex" />AmazonS3</span>.
      </li>
      <li>
        Migrated API to support partner integrations, improving the security layer and standardizing endpoints with <span className="text-nowrap"><SiExpress {...PROPS} />Express</span>.
      </li>
    </>}
  />
}

function SectionTwo() {
  return <Section
    title={<>associate<span className="not-italic uppercase"> at ifficient</span></>}
    content={<>
      <li>
        Contributed on projects focused on marketing and paid traffic, implementing new features, fixing bugs and maintaining/refactoring legacy systems.
      </li>
      <li>
        Added new features and refactored legacy UI using <span className="text-nowrap"><SiReact {...PROPS} />React</span>, <span className="text-nowrap"><SiBootstrap {...PROPS} />Bootstrap</span>, <span className="text-nowrap"><SiReactrouter {...PROPS} />ReactRouter</span>, <span className="text-nowrap"><SiCreatereactapp {...PROPS} />ReactFormsy</span>,<span className="text-nowrap"><SiReact {...PROPS} />ReactDND</span>, etc.
      </li>
      <li>
        Worked with <span className="text-nowrap"><SiNodedotjs {...PROPS} />Node.js</span>, <span className="text-nowrap"><SiExpress {...PROPS} />Express</span>, <span className="text-nowrap"><SiSequelize {...PROPS} />Sequelize</span>, <span className="text-nowrap"><SiPostgresql {...PROPS} />PostgresSQL</span> and <span className="text-nowrap"><SiElasticsearch {...PROPS} />Elasticsearch</span>, implementing new features and maintaining the API.
      </li>
    </>}
  />
}

function SectionTree() {
  return <Section
    title={<><span className="not-italic uppercase">Smaller</span> projects / freelance</>}
    content={<>
      <li>
        Handled ad-hoc requests for implementing new features and fixing bugs.
      </li>
      <li>
        Migrated legacy React systems by refactoring class components into functional components with <span className="text-nowrap"><SiReact {...PROPS} />React Hooks</span>.
      </li>
      <li>
        Helped implement a design system using <span className="text-nowrap"><SiStyledcomponents {...PROPS} />StyledComponents</span> and <span className="text-nowrap"><SiStorybook {...PROPS} />Storybook</span>
      </li>
      <li>
        Implemented an inventory management API using <span className="text-nowrap"><SiNodedotjs {...PROPS} />Node.js</span>, <span className="text-nowrap"><SiTypescript {...PROPS} />Typescript</span>, <span className="text-nowrap"><SiNestjs {...PROPS} />Nestjs</span>, <span className="text-nowrap"><SiPrisma {...PROPS} />Prisma</span> and <span className="text-nowrap"><SiPostgresql {...PROPS} />PostgresSQL</span>
      </li>
      <li>
        Contributed to increasing the test coverage of an open-source COVID-19 project using <span className="text-nowrap"><SiJest {...PROPS} />Jest</span>.
      </li>
    </>}
  />
}

function SectionFour() {
  return <Section
    title="education"
    content={<>
      <li>
        Bachelor's degrees in Science & Technology from the <img src={Ufersa} className="h-5 w-3 inline-flex" /> Federal Rural University of the Semi-Arid, Brazil.
      </li>
      <li>
        Graduated in Production Engineering from the <img src={Ufersa} className="h-5 w-3 inline-flex" /> Federal Rural University of the Semi-Arid, Brazil.
      </li>
      <li>
        Coursework included calculus, multivariable calculus, numerical analysis, computer & linear programming, computational simulation, among others.
      </li>
    </>}
  />
}

const PROPS = {
  size: window.innerWidth <= 768 ? 13 : 16,
  color: "white",
  className: "ml-[0.07rem] mr-[0.15rem] mb-[0.1rem] inline-flex"
}
