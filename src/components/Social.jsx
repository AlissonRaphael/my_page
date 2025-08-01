export default function Social({ title, url, Icon, description }) {
  return <div className="px-4 w-full h-full">
    <div className="w-full h-[1px] bg-gray-600"></div>

    <div className="px-4 py-6 w-full display flex items-center justify-between gap-5">
      <div className="">
        <Icon size={22} color="#fff" />
      </div>
      <span className="w-4/12 text-white text-3xl">
        {title}
      </span>

      <div className="w-6/12 flex flex-col gap-2 text-gray-500">
        <p className="text-[0.60rem] text-justify">
          {description}
        </p>
        <a href={url} className="text-xs">
          View
        </a>
      </div>
    </div>
  </div>
}
