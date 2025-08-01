import { SiGithub, SiMedium, SiGmail } from "@icons-pack/react-simple-icons";

import Social from "./Social";

export default function Footer() {
  return <div className="my-24 w-full flex flex-col items-center">
    <div className="w-100 flex justify-end">
      <div className="text-right text-[0.7rem] text-gray-300 w-95">
        You can find me and see more details about my work on several platforms.
        On LinkedIn, I share professional updates, connections, and experiences.
        On Medium, I write articles and tutorials about development and learnings
        along my journey. I also maintain personal projects and experiments on GitHub
      </div>
    </div>

    <div className="mt-10">
      {SOCIALS.map(({ title, url, icon, description }) => <Social
        key={title}
        title={title}
        description={description}
        url={url}
        Icon={icon}
      />)}
    </div>
  </div>
}

const SOCIALS = [
  {
    title: "Github",
    url: "",
    icon: SiGithub,
    description: "More details about personal projects, repositories, activities and code can be found directly on Github",
  },
  {
    title: "Medium",
    url: "",
    icon: SiMedium,
    description: "More details about personal projects, repositories, activities and code can be found directly on Github",
  },
  {
    title: "Email",
    url: "",
    icon: SiGmail,
    description: "More details about personal projects, repositories, activities and code can be found directly on Github",
  },
]
