import { HERO , SOCIAL_MEDIA_LINKS} from "../constants"
import pfp from "../assets/pfp.png"
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation';
import { FaChevronDown, FaMapMarkerAlt, FaGraduationCap, FaBook } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-wrap items-center">
        
        <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}   
            className="flex flex-col items-start w-full md:w-1/2 md:pl-8 lg:pl-16 order-2 md:order-2 -mt-32 md:mt-0 mb-10 md:mb-0"
        >
            <h2 className="my-4 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]"> 
                {HERO.name}
            </h2>
            
            <TypeAnimation
                sequence={[
                    HERO.greet[0], 1000,
                    HERO.greet[1], 1000,
                    HERO.greet[2], 1000,
                    HERO.greet[3], 1000,
                ]}
                className="p-2 text-3xl tracking-tight lg:text-4xl"
                cursor={true}
                repeat={Infinity}
                speed={50}
            />

            <div className="flex flex-col items-start my-4 pl-2">
                <p className="mb-1 text-xl flex items-center">
                    <FaMapMarkerAlt className="mr-2" /> {HERO.location}
                </p>
                <p className="mb-1 text-xl flex items-center">
                    <FaGraduationCap className="mr-2" /> {HERO.education}
                </p>
                <p className="mb-1 text-xl flex items-center">
                    <FaBook className="mr-2" /> {HERO.degree}
                </p>
            </div>

            <div className="flex items-center gap-4 p-2">
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <motion.a 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        whileHover={{ 
                            scale: 1.2,
                            color: '#646cff'
                        }}
                        transition={{
                            duration: 0.3,
                            delay: index * 0.1,
                            ease: "easeInOut"
                        }}
                        key={index} 
                        href={link.href} 
                        target="_blank" 
                        rel='noopener noreferrer'
                        className="text-3xl text-white"
                    >
                        {link.icon}
                    </motion.a>
                ))}
                
                <motion.a
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }}
                    whileHover={{ 
                        scale: 1.05,
                        backgroundColor: '#646cff'
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                    }}
                    href="/Taha_resume.pdf"
                    download
                    className="flex items-center gap-2 rounded-full bg-[#646cff]/80 px-6 py-3 text-sm font-semibold text-white"
                >
                    Download Resume
                </motion.a>
            </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1}} transition={{ duration: 1 }} className="w-full md:w-1/2 lg:p-8 order-1 md:order-1">
            <div className="flex justify-center">
                <motion.img 
                    initial={{ opacity: 0}} 
                    animate={{ opacity: 1}} 
                    transition={{ duration: 1 }} 
                    src={pfp} 
                    width={500} 
                    height={500} 
                    alt="Taha Yar Khan" 
                    className="rounded-full w-full h-full object-cover"
                />
            </div>
        </motion.div>

  
    </section>
  )
}

export default Hero