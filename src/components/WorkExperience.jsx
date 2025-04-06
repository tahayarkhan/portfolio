import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion"


const WorkExperience = () => {
  return (
    <section className='pt-20' id='work'>
        <motion.h2 initial={{ opacity: 0, y: -20}} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1}} className='text-center text-4xl font-semibold tracking-tighter mb-10'>Work Experience</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className='space-y-8 p-10 relative'>
            {/* Timeline line */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-stone-50/30' />
            
            {EXPERIENCES.map((experience, index) => (
                <motion.div 
                    initial={{opacity:0, x:-20}} 
                    whileInView={{opacity:1, x:0}} 
                    transition={{duration:1, delay:index*0.2}} 
                    key={index} 
                    className='rounded-xl border border-stone-50/30 bg-white/10 p-4 relative ml-12'
                >
                    {/* Timeline dot */}
                    <div className='absolute left-[-2.5rem] top-6 w-4 h-4 rounded-full bg-white' />
                    <h3 className='text-2xl font-semibold'>{experience.title}</h3>
                    <p className='text-xl'>{experience.company}</p>
                    <p className='text-sm text-stone-300'>{experience.duration}</p>
                    <p className='mt-2 text-base'>{experience.description}</p>
                </motion.div>
            ))}
        </motion.div>
    </section>
  )
}

export default WorkExperience