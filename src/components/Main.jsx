import { X } from 'lucide-react';
import IconRotation from "./IconRotation";
import Touch from './TouchAnimation';

export default function Main() {

  return <div className="w-screen h-screen flex flex-col relative">
    <div className="px-4 py-2 w-screen flex justify-between items-center text-gray-100">
      <IconRotation>
        <X className="stroke-gray-100" size={18} />
      </IconRotation>
      <div>en</div>
    </div>

    <div className="ml-12 flex-1 grid grid-cols-1 grid-rows-12">

      <div className="row-span-3">
        <h1 className="mt-18 text-gray-100 text-xs poppins-bold uppercase tracking-[0.4em]">welcome</h1>
        <div className="mt-2 text-xs max-w-10/12 text-gray-300">
          Here you'll find my projects, experiences, and a glimpse into my journey in the world of technology.
        </div>
        <div className="mt-2 text-xs max-w-10/12 text-gray-500">
          /main
        </div>
      </div>

      <div className="row-span-8 flex ">
        <div className="poppins-bold pr-6 text-4xl text-right" style={{ writingMode: 'sideways-lr' }}>
          alisson oliveira
        </div>
        <div className="bg-gray-800 flex-1">
          
        </div>
      </div>

      <div className="absolute inset-y-0 right-0 pr-6 flex">
        <Touch />
      </div>
  
    </div>

    <div className="px-4 py-2 w-screen flex justify-between items-center text-gray-100">
      /
    </div>
  </div>
}

// A human,<br/> buggy, but constantly updating.
