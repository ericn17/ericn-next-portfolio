import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#CDCDCD] text-2xl'>
        Projects  
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
       {projects.map((project) => (
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src='https://preview.redd.it/trigun-stampede-character-visual-for-vash-the-stampede-v0-0bq762hcv25a1.jpg?width=640&crop=smart&auto=webp&s=a252e14f35abfd69ab7a1585f474f9f60cc5a030'
            alt='vash'
          />

          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-[#CDCDCD] text-4xl font-semibold text-center'>
              CIGART.
            </h4>

            <p className='text-lg text-center md:text-left'>
              CIGART. is a MERN Stack e-commerce website that uses redux, stripe for payments, JSON web tokens, and mongodb to store the users' products. You can even search and filter products in the search bar.
            </p>
          </div>
        </div>
       ))}
      </div>     
      
      <div className='w-full absolute top-[30%] bg-[#FCEE0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}