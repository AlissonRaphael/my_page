import { X } from 'lucide-react';
import IconRotation from "./IconRotation";

export default function Main() {

  return <div className="w-screen h-screen bg-gray-950">
    <div className="px-4 py-2 w-screen flex justify-between items-center text-gray-100">
      <IconRotation>
        <X className="stroke-gray-100" size={18} />
      </IconRotation>
      <div>en</div>
    </div>

    <div className="ml-6 h-11/12 grid grid-cols-1 grid-rows-2">
      <div className="mt-20">
        <h1 className="text-white text-8xl title-bold">Hello,</h1>
        <div className="pb-1 leading-none origin-bottom-left -translate-y-6 rotate-90 max-w-43 text-gray-100 border-b-1 uppercase font-bold text-sm">
          A human,<br/> buggy, but constantly updating.
        </div>
      </div>
      <div className="">
        <div className="bg-red-400 h-100 m-0 p-0 opacity-70">
          <div className="bg-black h-16 w-16"></div>
        </div>
      </div>
    </div>
  </div>
}