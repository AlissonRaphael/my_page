import { SiGithub, SiMedium, SiGmail } from "@icons-pack/react-simple-icons";
import { ArrowUp, ArrowUpRight, Linkedin, SquareArrowUp } from "lucide-react";

import Social from "./Social";

export default function Footer() {
  return <footer id="footer" className="p-4 lg:p-14 w-full flex items-center justify-around gap-14 bg-black border-t-1 border-neutral-900">
    <div className="w-7/12 max-w-3xl">
      <div className="font-[FreightBig] text-4xl text-white uppercase">
        <span className="lowercase italic">you can </span>
        find me
        <span className="lowercase italic"> and see more </span>
        details about
        <span className="lowercase italic"> my work on </span>
        several platforms.
      </div>
      <p className="mt-2 text-neutral-400 text-base text-justify hyphens-auto">
        More details about personal projects, repositories, activities and code can be found directly on Github.
        Connect with me on LinkedIn, where I share professional updates and experiences.
        Articles and tutorials about development and learnings along my journey on Medium.
        Please feel free to contact us by email if you have any questions or professional interests.
      </p>

      <div className="mt-4">
        <a href="#home" className="cursor-pointer w-fit py-2 px-4 rounded-xs text-white gap-1 flex justify-center items-center bg-main opacity-60 hover:opacity-100 transition-all duration-300">
          <ArrowUpRight />
          Go back to top
        </a>
      </div>

      <div className="mt-12 text-neutral-500 text-base">
        © 2025 Your Name. All rights reserved. No part of this site may be reproduced without permission.
      </div>
    </div>

    <div className="w-5/12">
      {SOCIALS.map(({ id, title, url, icon, description }) => <Social
        id={id}
        key={id}
        title={title}
        description={description}
        url={url}
        Icon={icon}
      />)}
    </div>
  </footer>
}

const SOCIALS = [
  {
    id: "github",
    title: "Projects",
    url: "https://github.com/AlissonRaphael/",
    icon: SiGithub,
    description: "More details about personal projects, repositories, activities and code can be found directly on Github.",
  },
  {
    id: "linkedin",
    title: "Network",
    url: "https://www.linkedin.com/in/alisson-raphael-oliveira/",
    icon: Linkedin,
    description: "Connect with me on LinkedIn, where I share professional updates and experiences.",
  },
  {
    id: "medium",
    title: "Articles",
    url: "https://alissonraphaeloliveira.medium.com/",
    icon: SiMedium,
    description: "Articles and tutorials about development and learnings along my journey on Medium.",
  },
  {
    id: "email",
    title: "Contact",
    url: "mailto:alissonraphaelolivera@gmail.com/",
    icon: SiGmail,
    description: "Please feel free to contact us by email if you have any questions or professional interests.",
  },
]
