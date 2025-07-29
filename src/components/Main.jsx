import { motion } from 'framer-motion';

import TouchAnimation from './TouchAnimation';
import Datetime from './Datetime';
import Title from './Title';

import ImageZoom from './ImageZoom';

import Foto from '../assets/foto.jpg'

export default function Main() {
  return <div className="mb-24 w-full h-screen flex flex-col items-center justify-between relative">
    <TouchAnimation />

    <div className="p-4 w-full text-sm brightness-70">
      <Datetime />
    </div>

    <div className="pl-12 p-4 w-full">
      <Title
        title="welcome"
        description="Here you'll find my projects, experiences, and a glimpse into my journey in the world of technology."
        subtitle="/main"
      />
    </div>

    <div className="pl-12 p-4 w-full flex">
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

    <div className="p-4 w-full text-sm brightness-70 text-center">
      A human, buggy, but constantly updating 🤙
    </div>
  </div>
}
