import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import ProfilePicture from 'public/profile-pic.jpg'
import Link from 'next/link';
import { PageInfo } from '@/typings'


type Props = {
  pageInfo: PageInfo;
}

export default function Hero({ pageInfo }: Props) {
    const [text, count] =useTypewriter({
      words: [
        `Hi, My Name is ${pageInfo.name}.`,
        `I'm a ${pageInfo.role}.`,
        "Nice to Meet You ^_^",
      ],
      loop: true,
      delaySpeed: 2000,
    });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
        <BackgroundCircles />
        <Image 
          className='relative rounded-full h-40 w-40 mx-auto object-cover'
          src={ProfilePicture}
          alt="profile picture"  
        />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-[#CDCDCD] pb-2 tracking-[15px]'>
          Web Developer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#FCEE0C' />
        </h1>

        <div className='pt-7'>
          <Link href='#about'>
          <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
          <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
          <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
          <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}