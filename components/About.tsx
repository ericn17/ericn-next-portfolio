import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#CDCDCD] text-2xl'>
        About
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
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        src=''
        alt='profilepic'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a little background</h4>
        <p>I graduated from Cal State Fullerton with a degree in finance but ultimately fell in love with coding and enrolled in the UCI Coding Bootcamp. There my interest for coding grew as well as my ability to problem solve. Learning to code has been a challenging but very rewarding journey. I grew up gaming and so the my portfolio's theme is Cyber Punk inspired.</p>
      </div>
    </motion.div>
  )
}