import { CodeXml, Container } from "lucide-react"
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiShadcnui,
} from "@icons-pack/react-simple-icons"

export default function Expertise() {
  return <div className="w-svw h-screen bg-gray-900">
    <div className="px-4 w-full h-full max-w-2xl flex justify-center items-center">
      <Backend />
    </div>
  </div>
}

function Backend() {
  return <div className="w-full h-full">
    <div className="flex pt-10">
      <div className="flex-1/12">
        <Container size={30} className="stroke-2" />
      </div>
      <div className="flex-10/12 border-b-1 border-white"></div>
      <div className="flex-1/12 flex justify-end items-center">
        <CodeXml size={32} className="stroke-2" />
      </div>
    </div>

    <div className="flex">
      <div className="flex-1/12"></div>
      <div className="flex-10/12 text-xs py-4">
        Client Side
      </div>
      <div className="flex-1/12"></div>
    </div>

    <div className="flex">
      <div className="flex-1/12 bg-black"></div>
      <div className="flex-10/12 flex">
        <div className="flex-7/12">
          <div className="text-3xl w-5/6">
            experience working with frontend over the last few years
          </div>
        </div>

        <div className="flex-5/12 text-xs">
          <div className="flex flex-col gap-8">
            <div className="border-b-1 pb-12 text-[0.5rem]">
              Base, techs, tools, rameworks and libs
            </div>

            <div className="flex">
              <div className="flex-2/6">Base</div>
              <ul className="flex-4/6 flex flex-wrap gap-2">
                <li>
                  <div className="flex items-center text-white gap-[0.15rem]">
                    <SiHtml5 size={10} color="#fff" />
                    <span className="text-xs">HTML5</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center text-white gap-[0.15rem]">
                    <SiCss size={10} color="#fff" />
                    <span className="text-xs">CSS3</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center text-white gap-[0.15rem]">
                    <SiJavascript size={10} color="#fff" />
                    <span className="text-xs">Javascript</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center text-white gap-[0.15rem]">
                    <SiTypescript size={10} color="#fff" />
                    <span className="text-xs">Typescript</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex">
              <div className="flex-2/6">Techs</div>
              <ul className="flex-4/6 flex flex-wrap gap-2">
                <li>
                  <div className="flex items-center text-white gap-[0.15rem]">
                    <SiTailwindcss size={10} color="#fff" />
                    <span className="text-xs">Tailwindcss</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center text-white gap-[0.15rem]">
                    <SiShadcnui size={10} color="#fff" />
                    <span className="text-xs">Shadcn</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className="flex-1/12"></div>
    </div>

    <div className="flex ">
      <div className="flex-1/12"></div>
      <div className="flex-10/12 mt-8 pt-4 text-[0.5rem] flex items-end justify-between border-t-1 border-white">
        <div>2021 - current</div>
        <div className="text-base">Five Years</div>
        <div>Frontend</div>
      </div>
      <div className="flex-1/12"></div>
    </div>
  </div>
}
