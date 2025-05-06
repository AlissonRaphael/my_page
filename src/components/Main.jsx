import { X, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

import IconRotation from "./IconRotation";
import TouchAnimation from './TouchAnimation';
import TextScrollOut from './TextScrollOut';
import ImageZoom from './ImageZoom';
import TitleLeft from './TitleLeft';

import Foto from '../assets/foto.jpg'

export default function Main() {

  return <div className="w-full h-screen flex flex-col items-center relative">
    <TouchAnimation />

    <div className="px-4 py-2 w-full flex justify-between items-center text-gray-100">
      <IconRotation>
        <Plus className="stroke-gray-100" size={18} />
      </IconRotation>
      <div>en</div>
    </div>

    <div className="pl-12 flex-1 w-full max-w-6xl">
      <div className="h-3/12 pt-14">
        <TitleLeft
          title="welcome"
          description="Here you'll find my projects, experiences, and a glimpse into my journey in the world of technology."
          subtitle="/main"
        />
      </div>

      <div className="h-8/12 flex max-w-sm">
        <motion.div
          className="poppins-bold pr-6 text-4xl text-right"
          style={{ writingMode: 'sideways-lr' }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.7, ease: "circInOut" }}
        >
          <span className="text-main">alisson</span> oliveira<span className="text-main">.</span>
        </motion.div>
        <div className="">
          <ImageZoom src={Foto} alt="Foto de Alisson" />
        </div>
      </div>

      <div className="h-1/12 flex">
        <TextScrollOut />
      </div>

    </div>

    <div className="px-4 py-2 w-full flex justify-between items-center text-gray-100">
      <IconRotation>
        <X className="stroke-gray-100" size={18} />
      </IconRotation>
    </div>
  </div>
}
