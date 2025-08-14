import {useState, useRef} from 'react';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode, SiGmail } from 'react-icons/si';

const ContactLinks = () => {
    return (
        <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
            <motion.div
                variants={slideIn('left',"tween",0.2,1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Get in Touch</p>
                <h3 className={styles.sectionHeadText}>Developer Profiles</h3>
                
                {/* Links Section */}
                <div className="mt-6 flex flex-col gap-6">
                    <a
                    href="mailto:snehaprajapati3110@gmail.com"
                    className="flex items-center text-white text-2xl gap-4 hover:text-[#EA4335] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <SiGmail className="text-4xl text-[#EA4335]"/>Gmail
                    </a>
                    <a
                    href="https://www.linkedin.com/in/sneha-prajapati-095478265/"
                    className="flex items-center text-white text-2xl gap-4 hover:text-[#0A66C2] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <FaLinkedin className="text-4xl text-[#0A66C2]"/>LinkedIn
                    </a>
                    <a
                    href="https://github.com/Sneha-3110"
                    className="flex items-center text-white text-2xl gap-4 hover:text-gray-400 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <FaGithub className="text-4xl text-gray-200"/>GitHub
                    </a>
                    <a
                    href="https://leetcode.com/snehaprajapati3110"
                    className="flex items-center text-white text-2xl gap-4 hover:text-yellow-500 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <SiLeetcode className="text-4xl text-yellow-500"/>LeetCode
                    </a>
                    <a
                    href="https://www.hackerrank.com/CS_2201640100293"
                    className="flex items-center text-white text-2xl gap-4 hover:text-green-400 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <FaHackerrank className="text-4xl text-green-400"/>HackerRank
                    </a>
                </div>
        
            </motion.div>
            <motion.div variants={slideIn('right','tween',0.2,1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
                <EarthCanvas/>
            </motion.div>
        </div>
  )
}

export default SectionWrapper(ContactLinks,"contactlinks");