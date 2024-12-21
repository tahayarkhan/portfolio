import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'
import { motion } from "framer-motion"


const Footer = () => {
  return (
    <div className='mb-8 mt-20'>

       <div className='flex items-center justify-center gap-8'>
            
            {SOCIAL_MEDIA_LINKS.map((link,index) => (
                <motion.a initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.2, delay:0.5*index}} key={index} href={link.href} target="_blank" rel='noopener noreffer'>
                    {link.icon}
                </motion.a>
            ))}
            
        </div> 

        <p className='mt-8 text-center text-sm tracking-wide text-gray-400'>
            &copy;compileTab. All rights reserved.
        </p>


    </div>
  )
}

export default Footer