import { DynamicIcon } from "lucide-react/dynamic"
import { motion } from "framer-motion"
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

import TitleLeft from "./TitleLeft"

export default function Stack() {
  return <div className="mt-12 w-full flex flex-col items-center relative">
    <div className="p-8 w-full max-w-6xl flex flex-col">
      <TitleLeft
        title="welcome"
        description="Here you'll find my projects, experiences, and a glimpse into my journey in the world of technology."
        subtitle="/main"
      />

      <div className="mt-4 py-3 text-xs border-l-1 border-gray-700 relative">

        <motion.div
          className="absolute bottom-0 flex -left-[1px] w-[3px] bg-gray-950"
          initial={{ height: "100%" }}
          whileInView={{ height: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.div
          className="flex items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="w-2/5 flex items-center">
            <div className="pr-3 h-[24px] flex items-center justify-center relative">
              <DynamicIcon name="binary" className="py-1 absolute top-0 -left-[12px] bg-gray-950 stroke-gray-400" size={24} />
            </div>
            <div className="text-gray-400">
              Language
            </div>
          </div>

          <motion.div
            className="mt-1 w-3/5 flex flex-col justify-start"
            initial="hidden"
            whileInView="visible"
            variants={techAnimationList}
            custom={1}
            viewport={{ once: true }}
          >

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiJavascript size={14} color={SiJavascriptHex} className="mr-1" />
              <div className="text-gray-300">
                Javascript
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiTypescript size={14} color={SiTypescriptHex} className="mr-1" />
              <div className="text-gray-300">
                Typescript
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiElixir size={14} color={SiElixirHex} className="mr-1" />
              <div className="text-gray-300">
                Elixir
              </div>
            </motion.div>

          </motion.div>

        </motion.div>

        <motion.div
          className="mt-4 flex items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="w-2/5 flex items-center">
            <div className="pr-3 h-[23px] flex items-center justify-center relative">
              <DynamicIcon name="server" className="py-1 absolute top-0 -left-[12px] bg-gray-950 stroke-gray-400" size={23} />
            </div>
            <div className="text-gray-400">
              Backend
            </div>
          </div>

          <motion.div
            className="mt-1 w-3/5 flex flex-col justify-start"
            initial="hidden"
            whileInView="visible"
            variants={techAnimationList}
            custom={2}
            viewport={{ once: true }}
          >

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiNodedotjs size={14} color={SiNodedotjsHex} className="mr-1" />
              <div className="text-gray-300">
                Node.js
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiExpress size={14} color="#d9d9d9" className="mr-1" />
              <div className="text-gray-300">
                Express
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiNestjs size={14} color={SiNestjsHex} className="mr-1" />
              <div className="text-gray-300">
                NestJS
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiPostgresql size={14} color={SiPostgresqlHex} className="mr-1" />
              <div className="text-gray-300">
                PostgreSQL
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiSequelize size={14} color={SiSequelizeHex} className="mr-1" />
              <div className="text-gray-300">
                Sequelize
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiPrisma size={14} color="#e7e7e7" className="mr-1" />
              <div className="text-gray-300">
                Prisma
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiElasticsearch size={14} color={SiElasticsearchHex} className="mr-1" />
              <div className="text-gray-300">
                Elasticsearch
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiLogstash size={14} color={SiLogstashHex} className="mr-1" />
              <div className="text-gray-300">
                Logstash
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiRedis size={14} color={SiRedisHex} className="mr-1" />
              <div className="text-gray-300">
                Redis
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiJest size={14} color={SiJestHex} className="mr-1" />
              <div className="text-gray-300">
                Jest
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiDocker size={14} color={SiDockerHex} className="mr-1" />
              <div className="text-gray-300">
                Docker
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiHandlebarsdotjs size={14} color="#ff7700" className="mr-1" />
              <div className="text-gray-300">
                Handlebars.js
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiNunjucks size={14} color={SiNunjucksHex} className="mr-1" />
              <div className="text-gray-300">
                Nunjucks
              </div>
            </motion.div>

          </motion.div>

        </motion.div>

        <motion.div
          className="mt-4 flex items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="w-2/5 flex items-center">
            <div className="pr-3 h-[24px] flex items-center justify-center relative">
              <DynamicIcon name="code-xml" className="py-1 absolute top-0 -left-[12px] bg-gray-950 stroke-gray-400" size={24} />
            </div>
            <div className="text-gray-400">
              Frontend
            </div>
          </div>

          <motion.div
            className="mt-1 w-3/5 flex flex-col justify-start"
            initial="hidden"
            whileInView="visible"
            variants={techAnimationList}
            custom={4}
            viewport={{ once: true }}
          >

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiHtml5 size={14} color={SiHtml5Hex} className="mr-1" />
              <div className="text-gray-300">
                HTML5
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiCss size={14} color={SiCssHex} className="mr-1" />
              <div className="text-gray-300">
                CSS
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiReact size={14} color={SiReactHex} className="mr-1" />
              <div className="text-gray-300">
                React
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiNextdotjs size={14} color="#e7e7e7" className="mr-1" />
              <div className="text-gray-300">
                Next.js
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiVite size={14} color={SiViteHex} className="mr-1" />
              <div className="text-gray-300">
                Vite
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiWebpack size={14} color={SiWebpackHex} className="mr-1" />
              <div className="text-gray-300">
                Webpack
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiTailwindcss size={14} color={SiTailwindcssHex} className="mr-1" />
              <div className="text-gray-300">
                Tailwindcss
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiBootstrap size={14} color={SiBootstrapHex} className="mr-1" />
              <div className="text-gray-300">
                Bootstrap
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiSass size={14} color={SiSassHex} className="mr-1" />
              <div className="text-gray-300">
                Sass
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiStyledcomponents size={14} color={SiStyledcomponentsHex} className="mr-1" />
              <div className="text-gray-300">
                StyledComponents
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiStorybook size={14} color={SiStorybookHex} className="mr-1" />
              <div className="text-gray-300">
                Storybook
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiRadixui size={14} color="#e7e7e7" className="mr-1" />
              <div className="text-gray-300">
                RadixUI
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiChakraui size={14} color={SiChakrauiHex} className="mr-1" />
              <div className="text-gray-300">
                ChakraUI
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiShadcnui size={14} color="#e7e7e7" className="mr-1" />
              <div className="text-gray-300">
                ShadcnUI
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiReact size={14} color={SiReactHex} className="mr-1" />
              <div className="text-gray-300">
                React Native
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiExpo size={14} color="#999999" className="mr-1" />
              <div className="text-gray-300">
                Expo
              </div>
            </motion.div>

          </motion.div>

        </motion.div>

        <motion.div
          className="mt-4 flex items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 7, duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="w-2/5 flex items-center">
            <div className="pr-3 h-[24px] flex items-center justify-center relative">
              <DynamicIcon name="package" className="py-1 absolute top-0 -left-[12px] bg-gray-950 stroke-gray-400" size={24} />
            </div>
            <div className="text-gray-400">
              Others
            </div>
          </div>

          <motion.div
            className="mt-1 w-3/5 flex flex-col justify-start"
            initial="hidden"
            whileInView="visible"
            variants={techAnimationList}
            custom={7}
            viewport={{ once: true }}
          >

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiGit size={14} color={SiGitHex} className="mr-1" />
              <div className="text-gray-300">
                Git
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiEslint size={14} color={SiEslintHex} className="mr-1" />
              <div className="text-gray-300">
                Eslint
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiPrettier size={14} color={SiPrettierHex} className="mr-1" />
              <div className="text-gray-300">
                Prettier
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiAxios size={14} color={SiAxiosHex} className="mr-1" />
              <div className="text-gray-300">
                Axios
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiTurborepo size={14} color={SiTurborepoHex} className="mr-1" />
              <div className="text-gray-300">
                Turborepo
              </div>
            </motion.div>

            <motion.div
              className="mb-1 flex items-center"
              variants={techAnimationItem}
              transition={transition}
            >
              <SiZod size={14} color={SiZodHex} className="mr-1" />
              <div className="text-gray-300">
                Zod
              </div>
            </motion.div>

          </motion.div>

        </motion.div>

      </div>

    </div>
  </div>
}

const techAnimationList = {
  hidden: { opacity: 0 },
  visible: custom => ({
    opacity: 1,
    transition: {
      delayChildren: custom,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  }),
}

const techAnimationItem = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
}

const transition = {
  type: "tween",
  duration: 0.8,
  ease: "easeInOut",
}
