import { GitFork, Star, User } from "lucide-react";

export default function Repository({ title = '', license, description, language, visibility, owner, stars, watching, forks, url }) {
  if (!title) {
    return null
  }

  return <div className="m-4 p-4 h-full w-100 border-1 border-gray-600">
    <div className="mt-3 text-2xl leading-6 w-70">
      {title.replace(/_/g, ' ')}
    </div>

    <div className="mt-7 w-full h-[1px] bg-gray-600"></div>

    <div className="mt-7 w-full flex text-xs">
      <div className="w-4/12">
        <div className="text-gray-500">
          License
        </div>
        <div className="text-gray-400">
          {license}
        </div>
      </div>

      <div className="w-8/12 text-justify text-gray-400">
        {description}
      </div>
    </div>

    <div className="mt-7 w-full h-full aspect-4/3 bg-gray-800"></div>

    <div className="mt-7 w-full h-[1px] bg-gray-600"></div>

    <div className="mt-7 w-full flex text-xs">
      <div className="w-4/12">
        <div className="text-gray-500">
          Language
        </div>
        <div className="text-gray-400">
          {language}
        </div>
      </div>

      <div className="w-4/12">
        <div className="text-gray-500">
          Visibility
        </div>
        <div className="text-gray-400 capitalize">
          {visibility}
        </div>
      </div>

      <div className="w-4/12">
        <div className="text-gray-500">
          Owner
        </div>
        <div className="text-gray-400">
          {owner}
        </div>
      </div>
    </div>

    <div className="mt-7 w-full flex text-xs">
      <div className="w-4/12 flex gap-1">
        <Star className="stroke-gray-400" size={14} />
        <div className="text-gray-500">
          {stars} stars
        </div>
      </div>

      <div className="w-4/12 flex gap-1">
        <User className="stroke-gray-400" size={14} />
        <div className="text-gray-500">
          {watching} watching
        </div>
      </div>

      <div className="w-4/12 flex gap-1">
        <GitFork className="stroke-gray-400" size={14} />
        <div className="text-gray-500">
          {forks} forks
        </div>
      </div>
    </div>

    <div className="mt-7 w-full flex">
      <a 
        href={url}
        className="cursor-pointer w-full p-3 border-1 border-gray-600 text-gray-500 flex justify-center items-center hover:bg-gray-800 hover:text-gray-300 transition-colors"
      >
        See More
      </a>
    </div>
  </div>
}
