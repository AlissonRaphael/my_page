import { motion } from "framer-motion";
import { SiGithub, SiMedium, SiGmail } from "@icons-pack/react-simple-icons";
import { Linkedin } from "lucide-react";

import Social from "./Social";

export default function Footer() {
  return <div className="mt-24 py-6 w-full flex flex-col items-center bg-black border-t-1 border-b-1 border-neutral-900">
    <div className="p-2 w-100 flex justify-end">
      <div className="text-right text-[0.70rem] text-neutral-300 w-70">
        You can find me and see more details about my work on several platforms.
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
    url: "https://github.com/AlissonRaphael/",
    icon: SiGithub,
    description: "More details about personal projects, repositories, activities and code can be found directly on Github",
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/alisson-raphael-oliveira/",
    icon: Linkedin,
    description: "Connect with me on LinkedIn, where I share professional updates and experiences.",
  },
  {
    title: "Medium",
    url: "https://alissonraphaeloliveira.medium.com/",
    icon: SiMedium,
    description: "Articles and tutorials about development and learnings along my journey on Medium.",
  },
  {
    title: "Email",
    url: "mailto:alissonraphaelolivera@gmail.com/",
    icon: SiGmail,
    description: "Please feel free to contact us by email if you have any questions or professional interests.",
  },
]
