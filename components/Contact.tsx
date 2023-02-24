import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};


type Props = {}

export default function Contact({}: Props) {
  // Possibly replace with Emailjs
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:15enguyen4@gmail.com?subject={formData.subject}&body=A message from: ${formData.name}. Message: ${formData.message}`
  };
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#CDCDCD] text-2xl'>
        Contact 
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center text-[#CDCDCD]'>
          Let's get in touch.
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#FCEE0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>+7142248879</p>
          </div>

           <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#FCEE0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>15enguyen4@gmail.com</p>
          </div>

           <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#FCEE0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>Westminster, California</p>
          </div>
        </div>

        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2 '>
            <input {...register('name')} className='contactInput' type='text' placeholder='Name'/>
            <input {...register('email')} className='contactInput' type='text' placeholder='Email'/>
          </div>

          <input {...register('subject')} className='contactInput' type='text' placeholder='Subject'/>

          <textarea {...register('message')} className='contactInput' placeholder='Message'/>
          <button
            type='submit'
            className='bg-[#FCEE0A] py-5 px-10 rounded-md text-[#000000] font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  )
}

