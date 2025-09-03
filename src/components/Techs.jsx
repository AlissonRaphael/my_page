import {
  SiJavascript,
  SiPostgresql,
  SiSequelize,
  SiJest,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiStorybook,
  SiHtml5,
} from "@icons-pack/react-simple-icons";

export default function Techs() {
  return <div className="w-full h-100 relative">
    <div id="tech1" className="flex gap-8">
      {TOP.map(tech => <Tech key={tech.title} {...tech} />)}
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
