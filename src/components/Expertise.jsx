import { Braces, CodeXml, Combine, Container, GitBranch, GitGraph, Layers, ListChecks, SendToBack, Shapes, SquareKanban, SquareTerminal } from "lucide-react"
import {
  SiJavascript,
  SiJavascriptHex,
  SiTypescript,
  SiTypescriptHex,
  SiElixir,
  SiElixirHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiExpress,
  SiNestjs,
  SiNestjsHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiSequelize,
  SiSequelizeHex,
  SiPrisma,
  SiElasticsearch,
  SiElasticsearchHex,
  SiRedis,
  SiRedisHex,
  SiJest,
  SiJestHex,
  SiDocker,
  SiDockerHex,
  SiReact,
  SiReactHex,
  SiNextdotjs,
  SiWebpack,
  SiWebpackHex,
  SiVite,
  SiViteHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiBootstrap,
  SiBootstrapHex,
  SiSass,
  SiSassHex,
  SiStorybook,
  SiStorybookHex,
  SiExpo,
  SiGit,
  SiGitHex,
  SiEslint,
  SiEslintHex,
  SiAxios,
  SiAxiosHex,
  SiChakraui,
  SiChakrauiHex,
  SiHtml5,
  SiHtml5Hex,
  SiCss,
  SiCssHex,
  SiLogstash,
  SiLogstashHex,
  SiNunjucks,
  SiNunjucksHex,
  SiRadixui,
  SiShadcnui,
  SiStyledcomponents,
  SiStyledcomponentsHex,
  SiTurborepo,
  SiTurborepoHex,
  SiZod,
  SiZodHex,
  SiHandlebarsdotjs,
  SiPrettier,
  SiPrettierHex,
  SiFauna,
  SiFaunaHex,
  SiReactrouter,
  SiReactrouterHex,
  SiMongodb,
  SiMongodbHex,
  SiKubernetes,
  SiKubernetesHex,
  SiRabbitmq,
  SiRabbitmqHex,
  SiReactquery,
  SiReactqueryHex,
  SiGithubactions,
  SiGithubactionsHex,
  SiGnubashHex,
  SiGnubash,
  SiPuppeteer,
  SiPuppeteerHex,
  SiNginx,
  SiNginxHex,
  SiMysql,
  SiSwagger,
} from "@icons-pack/react-simple-icons"

export default function Expertise() {
  return <div className="w-svw h-full">
    <div className="px-4 w-full h-full max-w-3xl flex flex-col justify-center items-center">
      <Card {...GENERAL} />
      <Card {...BACKEND} />
      <Card {...FRONTEND} />
    </div>
  </div>
}

function Card({ toptitle, title, subtitle, description, period, experience, area }) {
  return <div className="mt-12 w-full h-full">
    <div className="pt-10 border-b-1 border-white"></div>

    <div className="px-4 py-4 flex text-xs">
      {toptitle}
    </div>

    <div className="px-4 flex">
      <div className="flex-1/2">
        <div className="text-3xl w-5/6">{title}</div>
      </div>

      <div className="flex-1/2 text-xs">
        <div className="flex flex-col gap-8">
          <div className="border-b-1 pb-12 text-[0.5rem]">
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

    <div className="flex px-4">
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
  subtitle: "Languages, Concepts",
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
      { name: "Agile/Scrum", icon: SquareKanban, size: 12 },
      { name: "Containerization", icon: SiDocker, size: 12 },
      { name: "Orchestration", icon: SiKubernetes, size: 12 },
    ]
  },
  period: "2021 - current",
  experience: "Five Years",
  area: "Fullstack",
}

const BACKEND = {
  toptitle: "Server Side",
  title: "Experience with server-side development",
  subtitle: "Languages, Frameworks, Databases, Tools",
  description: {
    base: [
      { name: "Javascript", icon: SiJavascript },
      { name: "Typescript", icon: SiTypescript },
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
    tools: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "ESLint", icon: SiEslint },
      { name: "Prettier", icon: SiPrettier },
    ]
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
    ],
    styling: [
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "SASS", icon: SiSass },
      { name: "Chakra UI", icon: SiChakraui },
      { name: "Styled Components", icon: SiStyledcomponents },
      { name: "Radix UI", icon: SiRadixui },
      { name: "Shadcn/ui", icon: SiShadcnui },
    ],
    others: [
      { name: "Webpack", icon: SiWebpack },
      { name: "Vite", icon: SiVite },
      { name: "React Query", icon: SiReactquery },
      { name: "Redux", icon: GitBranch },
      { name: "React Router", icon: SiReactrouter },
      { name: "Storybook", icon: SiStorybook },
      { name: "Jest", icon: SiJest },
    ],
  },
  period: "2021 - current",
  experience: "Five Years",
  area: "Frontend",
}
