import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
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
} from "@icons-pack/react-simple-icons"

import Typewriter from "./Typewriter";

const parent = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      duration: 1,
    },
  },
}

const children = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    }
  },
}

export default function Stack() {
    const scrollListener = useRef(null)
    const [scrolling, setScrolling] = useState(false)

    const stackContainerRef = useRef(null)
    const isView = useInView(stackContainerRef)
  
    useEffect(() => {
      let scrollTimeout;

      const getStart = () => {
        if (!scrollListener.current) {
          scrollListener.current = true
          setScrolling(true)
        }
      }

      const getEnd = () => {
        if (scrollListener.current) {
          clearTimeout(scrollTimeout)
          scrollTimeout = setTimeout(() => {
            scrollListener.current = false
            setScrolling(false)
          }, 500)
        }
      }

      window.addEventListener("scroll", getStart)
      window.addEventListener("scroll", getEnd)

  
      return () => {
        window.removeEventListener("scroll", getStart)
        window.removeEventListener("scroll", getEnd)
      }
    }, [])

  return <div className="mt-60 w-full flex flex-col items-center">
    <div className="m-auto w-50">
      <motion.div
        className="text-left text-6xl uppercase flex flex-col"
        variants={parent}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <motion.span variants={children} className="italic">Dev</motion.span>
        <motion.span variants={children}>Tech</motion.span>
        <motion.span variants={children} className="italic font-bold">St4ck</motion.span>
      </motion.div>
      <Typewriter
        className="text-[0.6rem] text-right text-neutral-400"
        text="Frontend ● Backend ● Tools"
      />
    </div>

    <div
      ref={stackContainerRef}
      className="mt-18 w-fit h-full grid grid-cols-6 grid-rows-11 pl-10 pr-4"
    >
      {STACKS.map(({ title, Icon, color, divider }, index) => <Item
        key={title}
        Icon={Icon}
        color={color}
        divider={divider}
        isView={isView}
        scrolling={scrolling}
        time={Math.random() + 0.1}
      />)}
    </div>
  </div>
}

function Item({ Icon, color, divider, isView, scrolling, time }) {
  if (divider) {
    return <div className="m-0 mt-1 ml-1 w-[55px] h-[55px] flex items-center justify-center rounded-full bg-black">
    </div>
  }

  color = Math.random() >= 0.5 && isView && scrolling ? color : "#fff";

  return <motion.div
    className="m-0 mt-1 ml-1 w-[58px] h-[58px] flex items-center justify-center rounded-full"
    animate={{ backgroundColor: color }}
    transition={{ duration: time, ease: "easeInOut" }}
  >
    <Icon size={26} color={color} className="p-1 brightness-85 w-auto h-auto" />
  </motion.div> 
}

const STACKS = [{
    title: "Javascript",
    Icon: SiJavascript,
    color: SiJavascriptHex,
  }, {
    divider: true,
  }, {
    title: "Typescript",
    Icon: SiTypescript,
    color: SiTypescriptHex,
  }, {
    title: "Elixir",
    Icon: SiElixir,
    color: SiElixirHex,
  }, {
    title: "Node.js",
    Icon: SiNodedotjs,
    color: SiNodedotjsHex,
  }, {
    title: "PostgreSQL",
    Icon: SiPostgresql,
    color: SiPostgresqlHex,
  }, {
    divider: true,
  }, {
    title: "MongoDB",
    Icon: SiMongodb,
    color: SiMongodbHex,
  }, {
    title: "Express",
    Icon: SiExpress,
    color: "#d9d9d9",
  }, {
    title: "NestJS",
    Icon: SiNestjs,
    color: SiNestjsHex,
  }, {
    divider: true,
  }, {
    divider: true,
  }, {
    title: "Sequelize",
    Icon: SiSequelize,
    color: SiSequelizeHex,
  }, {
    title: "Prisma",
    Icon: SiPrisma,
    color: "#e7e7e7",
  }, {
    title: "Fauna",
    Icon: SiFauna,
    color: SiFaunaHex,
  }, {
    title: "Elasticsearch",
    Icon: SiElasticsearch,
    color: SiElasticsearchHex,
  }, {
    title: "Logstash",
    Icon: SiLogstash,
    color: SiLogstashHex,
  }, {
    title: "Redis",
    Icon: SiRedis,
    color: SiRedisHex,
  }, {
    divider: true,
  }, {
    title: "Jest",
    Icon: SiJest,
    color: SiJestHex,
  }, {
    title: "Docker",
    Icon: SiDocker,
    color: SiDockerHex,
  }, {
    title: "Handlebars.js",
    Icon: SiHandlebarsdotjs,
    color: "#ff7700",
  }, {
    title: "Nunjucks",
    Icon: SiNunjucks,
    color: SiNunjucksHex,
  }, {
    divider: true,
  }, {
    divider: true,
  }, {
    title: "HTML5",
    Icon: SiHtml5,
    color: SiHtml5Hex,
  }, {
    title: "CSS",
    Icon: SiCss,
    color: SiCssHex,
  }, {
    divider: true,
  }, {
    divider: true,
  }, {
    divider: true,
  }, {
    title: "React",
    Icon: SiReact,
    color: SiReactHex,
  }, {
    title: "React Router",
    Icon: SiReactrouter,
    color: SiReactrouterHex,
  }, {
    title: "React Query",
    Icon: SiReactquery,
    color: SiReactqueryHex,
  }, {
    title: "Next.js",
    Icon: SiNextdotjs,
    color: "#e7e7e7",
  }, {
    title: "Vite",
    Icon: SiVite,
    color: SiViteHex,
  }, {
    title: "Webpack",
    Icon: SiWebpack,
    color: SiWebpackHex,
  }, {
    title: "Tailwindcss",
    Icon: SiTailwindcss,
    color: SiTailwindcssHex,
  }, {
    title: "Bootstrap",
    Icon: SiBootstrap,
    color: SiBootstrapHex,
  }, {
    divider: true,
  }, {
    title: "Sass",
    Icon: SiSass,
    color: SiSassHex,
  }, {
    title: "StyledComp...",
    Icon: SiStyledcomponents,
    color: SiStyledcomponentsHex,
  }, {
    title: "Storybook",
    Icon: SiStorybook,
    color: SiStorybookHex,
  }, {
    divider: true,
  }, {
    divider: true,
  }, {
    title: "RadixUI",
    Icon: SiRadixui,
    color: "#e7e7e7",
  }, {
    title: "ChakraUI",
    Icon: SiChakraui,
    color: SiChakrauiHex,
  }, {
    title: "ShadcnUI",
    Icon: SiShadcnui,
    color: "#e7e7e7",
  }, {
    title: "React Native",
    Icon: SiReact,
    color: SiReactHex,
  }, {
    title: "Expo",
    Icon: SiExpo,
    color: "#999999",
  }, {
    title: "Git",
    Icon: SiGit,
    color: SiGitHex,
  }, {
    title: "Eslint",
    Icon: SiEslint,
    color: SiEslintHex,
  }, {
    divider: true,
  }, {
    title: "Prettier",
    Icon: SiPrettier,
    color: SiPrettierHex,
  }, {
    title: "Axios",
    Icon: SiAxios,
    color: SiAxiosHex,
  }, {
    title: "Puppeteer",
    Icon: SiPuppeteer,
    color: SiPuppeteerHex,
  }, {
    title: "Zod",
    Icon: SiZod,
    color: SiZodHex,
  }, {
    title: "Nginx",
    Icon: SiNginx,
    color: SiNginxHex,
  }, {
    divider: true,
  }, {
    title: "Elastic Search",
    Icon: SiElasticsearch,
    color: SiElasticsearchHex,
  }, {
    title: "Logstash",
    Icon: SiLogstash,
    color: SiLogstashHex,
  }, {
    divider: true,
  }, {
    title: "Kubernetes",
    Icon: SiKubernetes,
    color: SiKubernetesHex,
  }, {
    title: "RabbitMQ",
    Icon: SiRabbitmq,
    color: SiRabbitmqHex,
  }, {
    title: "GithubActions",
    Icon: SiGithubactions,
    color: SiGithubactionsHex,
  }, {
    title: "Bash",
    Icon: SiGnubash,
    color: SiGnubashHex,
  }, {
    title: "Turborepo",
    Icon: SiTurborepo,
    color: SiTurborepoHex,
  }
]
