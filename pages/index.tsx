import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[#000000] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Eric's Portfolio</title>    
      </Head>

      {/* Header */}
      <Header/>
      {/* Hero */}
      <section id="hero" className='snap-center'>
        <Hero/>
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About/>
      </section>
      {/* Experience */}
      <section id='experience' className='snap-center'>
        <Experience/>
      </section>
      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}
