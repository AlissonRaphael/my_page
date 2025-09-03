import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiSequelize,
  SiPrisma,
  SiRedis,
  SiJest,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiStorybook,
  SiExpo,
  SiHtml5,
  SiCss,
  SiRadixui,
  SiShadcnui,
  SiStyledcomponents,
  SiZod,
  SiHandlebarsdotjs,
} from "@icons-pack/react-simple-icons";

export default function Techs() {
  useGSAP(() => {
    gsap.to("marquee-top", {
      xPercent: -100,
      repeat: -1,
      ease: "none",
      duration: 20,
    }).totalProgress(0.5)

    gsap.set("marquee-top", { xPercent: -50 })
    
  }, [])

  return <div className="w-full h-100 relative">
    <div id="marquee-top" className="flex gap-8">
      {TOP.map(tech => <Tech key={tech.title} {...tech} />)}
    </div>
    <div id="marquee-middle" className="flex gap-8 pt-4">
      {MIDDLE.map(tech => <Tech key={tech.title} {...tech} />)}
    </div>
    <div id="marquee-bottom" className="flex gap-8 pt-4">
      {BOTTOM.map(tech => <Tech key={tech.title} {...tech} />)}
    </div>
  </div>
}

function Tech({ title, Icon }) {
  return <div className="flex items-center text-white gap-2">
    <Icon size={30} color="#fff" />
    <span className="whitespace-nowrap text-xl">{title}</span>
  </div>
}

const TOP = [{
  title: "Jest",
  Icon: SiJest,
}, {
  title: "HTML5",
  Icon: SiHtml5,
}, {
  title: "Next.js",
  Icon: SiNextdotjs,
}, {
  title: "Javascript",
  Icon: SiJavascript,
}, {
  title: "PostgreSQL",
  Icon: SiPostgresql,
}, {
  title: "Sequelize",
  Icon: SiSequelize,
}, {
  title: "Bootstrap",
  Icon: SiBootstrap,
}, {
  title: "Storybook",
  Icon: SiStorybook,
}, {
  title: "React Native",
  Icon: SiReact,
}]

const MIDDLE = [{
  title: "CSS",
  Icon: SiCss,
}, {
  title: "Vite",
  Icon: SiVite,
}, {
  title: "Sass",
  Icon: SiSass,
}, {
  title: "Typescript",
  Icon: SiTypescript,
}, {
  title: "Express",
  Icon: SiExpress,
}, {
  title: "Prisma",
  Icon: SiPrisma,
}, {
  title: "Docker",
  Icon: SiDocker,
}, {
  title: "RadixUI",
  Icon: SiRadixui,
}, {
  title: "Expo",
  Icon: SiExpo,
}]

const BOTTOM = [{
  title: "Handlebars.js",
  Icon: SiHandlebarsdotjs,
}, {
  title: "React",
  Icon: SiReact,
}, {
  title: "Node.js",
  Icon: SiNodedotjs,
}, {
  title: "NestJS",
  Icon: SiNestjs,
}, {
  title: "Redis",
  Icon: SiRedis,
}, {
  title: "Tailwindcss",
  Icon: SiTailwindcss,
}, {
  title: "Styled Components",
  Icon: SiStyledcomponents,
}, {
  title: "ShadcnUI",
  Icon: SiShadcnui,
}, {
  title: "Zod",
  Icon: SiZod,
}]
