// import React from 'react'
import Mtd5 from "../assets/Mdt5.png";
import { motion } from 'framer-motion';
const codGen = () => {
  return (
<div className="bg-black min-h-screen flex flex-col justify-center items-center">
  <div className="max-w-xs w-full sm:max-w-md">
    <div className="bg-zinc-700 p-3 rounded-lg shadow-lg relative">
      <div className="relative">
        <img
          className="mx-auto"
          src={Mtd5}
          alt="Imagen"
        />
        <span className="absolute top-0 left-0 right-0 bg-transparent text-white px-2 py-12 sm:py-32 text-xl sm:text-4xl text-center z-10 text-shadow">Su código es: 12345xs</span>
        <a href="https://www.google.com"  rel="noopener noreferrer">
          <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
          className="absolute bottom-0 left-0 right-0 bg-red-500 text-white px-4 py-2 mt-2 rounded-lg z-10">Gracias por su registro</motion.button>
        </a>
      </div>
    </div>
  </div>
</div>

  )
}

export default codGen
