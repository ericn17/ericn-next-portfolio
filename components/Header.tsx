import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div 
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration:1.5,
      }}
      className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
        className='socialIcons' 
        url="https://github.com/ericn17" 
        style={{ height: 45, width: 45 }}
        bgColor=' #FCEE0A'
        />
        <SocialIcon 
        className='socialIcons' 
        url="https://www.linkedin.com/feed/" 
        style={{ height: 45, width: 45 }}
        bgColor=' #FCEE0A'
        />
        <SocialIcon
        className='socialIcons' 
        url="https://facebook.com" 
        style={{ height: 45, width: 45 }}
        bgColor=' #FCEE0A'
        />
        <SocialIcon
        className='socialIcons' 
        url="https://instagram.com" 
        style={{ height: 45, width: 45 }}
        bgColor=' #FCEE0A'
        />
      </motion.div>

      <motion.div
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration:1.5,
      }} 
      className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor=" #FCEE0A"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#FCEE0A]">Contact Me</p>
      </motion.div>
    </header>
  )
}