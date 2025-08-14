import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../style';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion'

import { SectionWrapper } from '../hoc';

const ServiceCard=({index,title,icon})=>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max:45, scale:1, speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a tech enthusiast with hands-on experience in web development and a strong foundation in Python and C++. I enjoy building interactive user interfaces using React and Tailwind CSS, and I've also explored 3D visualizations with Three.js. I'm comfortable working with version control tools like Git and GitHub and have built real-world projects involving machine learning, front-end design, and full-stack development.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")