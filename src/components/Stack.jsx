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
} from "@icons-pack/react-simple-icons"

import Card from "./Card"

export default function Stack() {
  return <div className="my-24 w-full">
    <div className="m-auto w-50">
      <div className="text-left text-6xl uppercase">
        <span className="italic">Dev</span> Tech <span className="italic font-bold">St4ck</span>
      </div>
      <div className="text-[0.6rem] text-right text-gray-400">
        Frontend ● Backend ● Orther
      </div>
    </div>

    <div className="mt-18 w-full h-full grid grid-cols-6 grid-rows-11 pl-10 pr-4">
      {STACK.map(({ Icon, color, divider }, index) => {
        if (divider) {
          return <div className="m-1 w-[55px] h-[55px] flex items-center justify-center rounded-full bg-black" key={index}>
          </div>
        }
        return <div className="m-1 w-[58px] h-[58px] flex items-center justify-center rounded-full" key={index} style={{ backgroundColor: color }}>
          <Icon size={26} color={color} className="p-1 brightness-90 w-auto h-auto" />
        </div>
      })}
    </div>
  </div>
}

const STACK = [{
    title: "Javascript",
    description: "Language",
    Icon: SiJavascript,
    color: SiJavascriptHex,
    footer: "2019",
  }, {
    divider: true,
  }, {
    title: "Typescript",
    description: "Language",
    Icon: SiTypescript,
    color: SiTypescriptHex,
    footer: "2021",
  }, {
    title: "Elixir",
    description: "Language",
    Icon: SiElixir,
    color: SiElixirHex,
    footer: "2022",
  }, {
    title: "Node.js",
    description: "Backend",
    Icon: SiNodedotjs,
    color: SiNodedotjsHex,
    footer: "2020",
  }, {
    title: "PostgreSQL",
    description: "Backend",
    Icon: SiPostgresql,
    color: SiPostgresqlHex,
    footer: "2020",
  }, {
    divider: true,
  }, {
    title: "Express",
    description: "Backend",
    Icon: SiExpress,
    color: "#d9d9d9",
    footer: "2020",
  }, {
    title: "NestJS",
    description: "Backend",
    Icon: SiNestjs,
    color: SiNestjsHex,
    footer: "2021",
  }, {
    title: "Sequelize",
    description: "Backend",
    Icon: SiSequelize,
    color: SiSequelizeHex,
    footer: "2020",
  }, {
    divider: true,
  }, {
    divider: true,
  }, {
    title: "Prisma",
    description: "Backend",
    Icon: SiPrisma,
    color: "#e7e7e7",
    footer: "2023",
  }, {
    title: "Elasticsearch",
    description: "Backend",
    Icon: SiElasticsearch,
    color: SiElasticsearchHex,
    footer: "2021",
  }, {
    title: "Logstash",
    description: "Backend",
    Icon: SiLogstash,
    color: SiLogstashHex,
    footer: "2021",
  }, {
    title: "Redis",
    description: "Backend",
    Icon: SiRedis,
    color: SiRedisHex,
    footer: "2020",
  }, {
    title: "Jest",
    description: "Backend",
    Icon: SiJest,
    color: SiJestHex,
    footer: "2020",
  }, {
    title: "Docker",
    description: "Backend",
    Icon: SiDocker,
    color: SiDockerHex,
    footer: "2020",
  }, {
    divider: true,
  }, {
    title: "Handlebars.js",
    description: "Backend",
    Icon: SiHandlebarsdotjs,
    color: "#ff7700",
    footer: "2021",
  }, {
    title: "Nunjucks",
    description: "Backend",
    Icon: SiNunjucks,
    color: SiNunjucksHex,
    footer: "2019",
  }, {
    title: "HTML5",
    description: "Frontend",
    Icon: SiHtml5,
    color: SiHtml5Hex,
    footer: "2019",
  }, {
    title: "CSS",
    description: "Frontend",
    Icon: SiCss,
    color: SiCssHex,
    footer: "2019",
  }, {
    divider: true,
  }, {
    divider: true,
  }, {
    title: "React",
    description: "Frontend",
    Icon: SiReact,
    color: SiReactHex,
    footer: "2020",
  }, {
    title: "Next.js",
    description: "Frontend",
    Icon: SiNextdotjs,
    color: "#e7e7e7",
    footer: "2023",
  }, {
    divider: true,
  }, {
    divider: true,
  }, {
    divider: true,
  }, {
    title: "Vite",
    description: "Frontend",
    Icon: SiVite,
    color: SiViteHex,
    footer: "2024",
  }, {
    title: "Webpack",
    description: "Frontend",
    Icon: SiWebpack,
    color: SiWebpackHex,
    footer: "2020",
  }, {
    title: "Tailwindcss",
    description: "Frontend",
    Icon: SiTailwindcss,
    color: SiTailwindcssHex,
    footer: "2024",
  }, {
    title: "Bootstrap",
    description: "Frontend",
    Icon: SiBootstrap,
    color: SiBootstrapHex,
    footer: "2022",
  }, {
    title: "Sass",
    description: "Frontend",
    Icon: SiSass,
    color: SiSassHex,
    footer: "2021",
  }, {
    title: "StyledComp...",
    description: "Frontend",
    Icon: SiStyledcomponents,
    color: SiStyledcomponentsHex,
    footer: "2020",
  }, {
    title: "Storybook",
    description: "Frontend",
    Icon: SiStorybook,
    color: SiStorybookHex,
    footer: "2022",
  }, {
    title: "RadixUI",
    description: "Frontend",
    Icon: SiRadixui,
    color: "#e7e7e7",
    footer: "2024",
  }, {
    divider: true,
  }, {
    title: "ChakraUI",
    description: "Frontend",
    Icon: SiChakraui,
    color: SiChakrauiHex,
    footer: "2024",
  }, {
    title: "ShadcnUI",
    description: "Frontend",
    Icon: SiShadcnui,
    color: "#e7e7e7",
    footer: "2024",
  }, {
    title: "React Native",
    description: "Frontend",
    Icon: SiReact,
    color: SiReactHex,
    footer: "2021",
  }, {
    divider: true,
  }, {
    divider: true,
  }, {
    title: "Expo",
    description: "Frontend",
    Icon: SiExpo,
    color: "#999999",
    footer: "2021",
  }, {
    title: "Git",
    description: "Tools",
    Icon: SiGit,
    color: SiGitHex,
    footer: "2020",
  }, {
    title: "Eslint",
    description: "Tools",
    Icon: SiEslint,
    color: SiEslintHex,
    footer: "2021",
  }, {
    title: "Prettier",
    description: "Tools",
    Icon: SiPrettier,
    color: SiPrettierHex,
    footer: "2021",
  }, {
    title: "Axios",
    description: "Tools",
    Icon: SiAxios,
    color: SiAxiosHex,
    footer: "2020",
  }, {
    title: "Turborepo",
    description: "Tools",
    Icon: SiTurborepo,
    color: SiTurborepoHex,
    footer: "2024",
  }, {
    title: "Zod",
    description: "Tools",
    Icon: SiZod,
    color: SiZodHex,
    footer: "2024",
  },
]
