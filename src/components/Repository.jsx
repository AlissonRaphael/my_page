import { GitFork, Star, User } from "lucide-react";

export default function Repository({ title = '', license, description, language, visibility, owner, stars, watching, forks, url }) {
  if (!title) {
    return null
  }

  return <div className="mt-6 p-4 h-full w-full border-1 border-neutral-600">
    <div className="mt-3 text-2xl leading-6 w-70">
      {title.replace(/_/g, ' ')}
    </div>

    <div className="mt-7 w-full h-[1px] bg-neutral-600"></div>

    <div className="mt-7 w-full flex text-xs">
      <div className="w-4/12">
        <div className="text-neutral-500">
          License
        </div>
        <div className="text-neutral-400">
          {license}
        </div>
      </div>

      <div className="w-8/12 text-justify text-neutral-400">
        {description}
      </div>
    </div>

    <div className="mt-7 w-full h-full aspect-4/3 bg-neutral-800"></div>

    <div className="mt-7 w-full h-[1px] bg-neutral-600"></div>

    <div className="mt-7 w-full flex text-xs">
      <div className="w-4/12">
        <div className="text-neutral-500">
          Language
        </div>
        <div className="text-neutral-400">
          {language}
        </div>
      </div>

      <div className="w-4/12">
        <div className="text-neutral-500">
          Visibility
        </div>
        <div className="text-neutral-400 capitalize">
          {visibility}
        </div>
      </div>

      <div className="w-4/12">
        <div className="text-neutral-500">
          Owner
        </div>
        <div className="text-neutral-400">
          {owner}
        </div>
      </div>
    </div>

    <div className="mt-7 w-full flex text-xs">
      <div className="w-4/12 flex gap-1">
        <Star className="stroke-neutral-400" size={14} />
        <div className="text-neutral-500">
          {stars} stars
        </div>
      </div>

      <div className="w-4/12 flex gap-1">
        <User className="stroke-neutral-400" size={14} />
        <div className="text-neutral-500">
          {watching} watching
        </div>
      </div>

      <div className="w-4/12 flex gap-1">
        <GitFork className="stroke-neutral-400" size={14} />
        <div className="text-neutral-500">
          {forks} forks
        </div>
      </div>
    </div>

    <div className="mt-7 w-full flex">
      <a 
        href={url}
        className="cursor-pointer w-full p-3 border-1 border-neutral-600 text-neutral-500 flex justify-center items-center hover:bg-neutral-800 hover:text-neutral-300 transition-colors"
      >
        more details
      </a>
    </div>
  </div>
}
