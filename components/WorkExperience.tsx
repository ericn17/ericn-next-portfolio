import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#CDCDCD] text-2xl'>
        Experience
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-fit md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        src='/uci-bc-logo.png'
        alt='ucibootcamp'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Coding Bootcamp</h4>
        <p>I enrolled in the UCI, Division of Continuing Education, boot camp in May of 2022. Through the UCI Coding bootcamp, they stimulated a professional work environment which required me to work closely with my peers to build real-world projects and complex applications. My group collaborated together on a single respository similar to a professional work environment and there we would debug and decide which changes were commited.  </p>
      </div>
    </motion.div>
  )
}