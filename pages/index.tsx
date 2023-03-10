import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[#000000] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FCEE0A]">
      <Head>
        <title>Eric's Portfolio</title>    
      </Head>

      <Header/>
   
      <section id="hero" className='snap-start'>
        <Hero/>
      </section>
    
      <section id='about' className='snap-center'>
        <About/>
      </section>

      <section id='experience' className='snap-center'>
        <Experience/>
      </section>

      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      <section id='projects' className='snap-start'>
        <Projects/>
      </section>

      <section id='contact' className='snap-start'>
        <Contact/>
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
              src="https://e7.pngegg.com/pngimages/359/464/png-clipart-vash-the-stampede-trigun-anime-manga-toonami-anime-computer-wallpaper-cartoon.png" 
              alt="vash" 
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}
