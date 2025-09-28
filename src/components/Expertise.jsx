import { Braces, CodeXml, Combine, Container, GitBranch, GitGraph, Languages, Layers, ListChecks, SendToBack, Shapes, SquareKanban, SquareTerminal } from "lucide-react"
import {
  SiJavascript,
  SiTypescript,
  SiElixir,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiSequelize,
  SiPrisma,
  SiElasticsearch,
  SiRedis,
  SiJest,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiWebpack,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiStorybook,
  SiGit,
  SiEslint,
  SiChakraui,
  SiHtml5,
  SiCss,
  SiRadixui,
  SiShadcnui,
  SiStyledcomponents,
  SiZod,
  SiHandlebarsdotjs,
  SiPrettier,
  SiFauna,
  SiReactrouter,
  SiKubernetes,
  SiReactquery,
  SiMysql,
  SiSwagger,
  SiRedux,
} from "@icons-pack/react-simple-icons"

export default function Expertise() {
  return <div className="w-svw h-full flex flex-col items-center">
    <div className="px-4 w-full h-full max-w-3xl flex flex-col items-center gap-y-16 sm:gap-y-24">
      <Card {...GENERAL} />
      <Card {...BACKEND} />
      <Card {...FRONTEND} />
    </div>
  </div>
}

function Card({ toptitle, title, subtitle, description, period, experience, area }) {
  return <div className="w-full h-full">
    <div className="pt-10 border-b-1 border-white"></div>

    <div className="px-6 py-4 text-xs">{toptitle}</div>

    <div className="px-6 flex flex-col sm:flex-row">
      <div className="flex-1/2">
        <div className="text-3xl w-5/6">{title}</div>
      </div>

      <div className="flex-1/2 text-xs">
        <div className="flex flex-col gap-8">
          <div className="border-b-1 pb-8 sm:pb-12 pt-4 sm:pt-0 text-[0.5rem]">
            {subtitle}
          </div>

          {Object.entries(description).map(([key, items]) => <div key={key} className="flex">
            <div className="flex-1/2 capitalize">{key}</div>
            <ul className="flex-1/2 flex flex-wrap gap-x-2 gap-y-1">
              {items.map(({ name, icon: Icon, size = 10 }) => <li key={name}>
                <div className="flex items-center text-white gap-[0.2rem]">
                  <Icon size={size} />
                  <span className="text-xs">{name}</span>
                </div>
              </li>)}
            </ul>
          </div>)}
        </div>
      </div>
    </div>

    <div className="px-6 flex">
      <div className="flex-1 mt-8 pt-4 text-[0.5rem] flex items-end justify-between border-t-1 border-white">
        <div>{period}</div>
        <div className="text-base">{experience}</div>
        <div>{area}</div>
      </div>
    </div>
  </div>
}

const GENERAL = {
  toptitle: "General",
  title: "Core skills in web development",
  subtitle: "Development, Concepts",
  description: {
    development: [
      { name: "Client Side", icon: CodeXml, size: 12 },
      { name: "Server Side", icon: SquareTerminal, size: 12 },
      { name: "Fullstack", icon: Layers, size: 12 },
    ],
    concepts: [
      { name: "OOP", icon: Combine, size: 12 },
      { name: "Clean Architecture", icon: SendToBack, size: 12 },
      { name: "SOLID", icon: Braces, size: 12 },
      { name: "TDD", icon: ListChecks, size: 12 },
      { name: "DDD", icon: Shapes, size: 12 },
      { name: "Versioning", icon: GitGraph, size: 12 },
      { name: "Kanban/Scrum/Agile", icon: SquareKanban, size: 12 },
      { name: "Containerization", icon: SiDocker, size: 12 },
      { name: "Orchestration", icon: SiKubernetes, size: 12 },
    ],
    "Workflow / Tools": [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "ESLint", icon: SiEslint },
      { name: "Prettier", icon: SiPrettier },
    ]
  },
  period: "* - current",
  experience: "*",
  area: "General",
}

const BACKEND = {
  toptitle: "Server Side",
  title: "Experience with server-side development",
  subtitle: "Base, Frameworks, Databases, Tools",
  description: {
    language: [
      { name: "Javascript", icon: SiJavascript },
      { name: "Typescript", icon: SiTypescript },
      { name: "Elixir", icon: SiElixir },
    ],
    base: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Nestjs", icon: SiNestjs },
    ],
    databases: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
      { name: "Elasticsearch", icon: SiElasticsearch },
      { name: "Fauna", icon: SiFauna },
    ],
    ORM: [
      { name: "Sequelize", icon: SiSequelize },
      { name: "Prisma", icon: SiPrisma },
      { name: "TypeORM", icon: Braces },
    ],
    others: [
      { name: "Jest", icon: SiJest },
      { name: "Swagger", icon: SiSwagger },
      { name: "Zod", icon: SiZod },
      { name: "Handlebars", icon: SiHandlebarsdotjs },
    ],
  },
  period: "2021 - current",
  experience: "Five Years",
  area: "Backend",
}

const FRONTEND = {
  toptitle: "Server Side",
  title: "Experience with client-side development",
  subtitle: "Frameworks, Libs, Tools",
  description: {
    base: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Javascript", icon: SiJavascript },
      { name: "Typescript", icon: SiTypescript },
    ],
    "Frameworks / Libs": [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Query", icon: SiReactquery },
      { name: "Redux", icon: SiRedux },
      { name: "React Router", icon: SiReactrouter },
    ],
    styling: [
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Sass", icon: SiSass },
      { name: "Styled Components", icon: SiStyledcomponents, size: 12 },
      { name: "Shadcn/ui", icon: SiShadcnui },
      { name: "Chakra UI", icon: SiChakraui },
      { name: "Radix UI", icon: SiRadixui },
    ],
    others: [
      { name: "Vite", icon: SiVite },
      { name: "Webpack", icon: SiWebpack },
      { name: "Jest", icon: SiJest },
      { name: "Storybook", icon: SiStorybook },
    ],
  },
  period: "2021 - current",
  experience: "Six Years",
  area: "Frontend",
}
