import { useCallback, useEffect, useState } from 'react';
import Repository from './Repository';

export default function Repos() {
  const [repositories, setRepositories] = useState([])

  const loadRepositories = useCallback(async () => {
    const response = await fetch('https://api.github.com/users/AlissonRaphael/repos')
    const data = await response.json()
    setRepositories(data)
  }, [])

  useEffect(() => {
    loadRepositories()
  }, [loadRepositories])

  return <div className="my-24 w-full flex flex-col items-center">
    <div className="w-full mr-10 flex flex-row justify-end">
      <div className="pr-4 pt-32 border-r-1 border-gray-500">
        <div className="m-auto" style={{ writingMode: 'sideways-lr' }}>
          <div className="text-left text-7xl font-bold uppercase italic">
            R3pos
          </div>
          <div className="w-full grid grid-cols-4 grid-rows-1 gap-1 items-end">
            <div className="bg-white h-full w-[7px] relative">
              <div className="absolute -right-3 text-gray-500 text-[6px]">0%</div>
            </div>
            <div className="bg-gray-500 h-full w-[1px] relative">
              <div className="absolute -right-3 text-gray-500 text-[6px]">0%</div>
            </div>
            <div className="bg-gray-300 h-full w-[4px] relative">
              <div className="absolute -right-3 text-gray-500 text-[6px]">0%</div>
            </div>
            <div className="bg-gray-400 h-full w-[2px] relative">
              <div className="absolute -right-3 text-gray-500 text-[6px]">0%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="m">
      {
        repositories.map(({ id, name, license, description, language, visibility, owner, stargazers_count, watchers_count, forks_count, html_url }) => {
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
        })
      }
    </div>
  </div>
}
