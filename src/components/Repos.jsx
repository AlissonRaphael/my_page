import { useCallback, useEffect, useState } from 'react';
import Repository from './Repository';
import { PackagePlus } from 'lucide-react';

const OFFSET = 5

export default function Repos() {
  const [repositories, setRepositories] = useState([])
  const [showing, setShowing] = useState([])
  const [page, setPage] = useState(1)

  const loadRepositories = useCallback(async () => {
    const response = await fetch('https://api.github.com/users/AlissonRaphael/repos')
    const data = await response.json()
    setRepositories(data)
    setShowing(data.filter((_, index) => index < OFFSET))
  }, [])

  useEffect(() => {
    loadRepositories()
  }, [loadRepositories])

  const handleShowRepositories = useCallback(async page => {
    const lastIndex = page * OFFSET
    const showing = repositories.filter((_, index) => index < lastIndex)
    setShowing(showing)
    setPage(page)
  }, [repositories])

  return <div className="mt-60 p-4 w-full flex flex-col items-center">
    <div className="w-100 flex flex-row justify-end">
      <div className="pr-4 pt-32 border-r-1 border-neutral-500">
        <div className="m-auto" style={{ writingMode: 'sideways-lr' }}>
          <div className="text-left text-7xl font-bold uppercase italic">
            R3pos
          </div>
          <div className="w-full grid grid-cols-4 grid-rows-1 gap-1 items-end">
            <div className="bg-white h-full w-[7px] relative">
              <div className="absolute -right-3 text-neutral-500 text-[6px]">0%</div>
            </div>
            <div className="bg-neutral-500 h-full w-[1px] relative">
              <div className="absolute -right-3 text-neutral-500 text-[6px]">0%</div>
            </div>
            <div className="bg-neutral-300 h-full w-[4px] relative">
              <div className="absolute -right-3 text-neutral-500 text-[6px]">0%</div>
            </div>
            <div className="bg-neutral-400 h-full w-[2px] relative">
              <div className="absolute -right-3 text-neutral-500 text-[6px]">0%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      { showing.map(({ id, name, license, description, language, visibility, owner, stargazers_count, watchers_count, forks_count, html_url }) => {
        const { name: licenseName } = license || {}
        const { login } = owner || {}
        return <Repository 
          key={id}
          title={name}
          license={licenseName}
          description={description}
          language={language}
          visibility={visibility}
          owner={login}
          stars={stargazers_count}
          watching={watchers_count}
          forks={forks_count}
          url={html_url}
        />
      })}
    </div>
      { repositories.length === showing.length ? null : <div className="mt-6 w-full flex">
        <button 
          onClick={() => handleShowRepositories(page + 1)}
          className="cursor-pointer w-100 p-3 rounded-xs text-white flex justify-center items-center gap-2 bg-main opacity-70 hover:opacity-100 transition-all duration-300"
        >
          <PackagePlus />
          See More
        </button>
      </div> }
  </div>
}
