
import './Projects.css'
import project1 from '../Assets/project1.png'
import figma from '../Assets/figma.png'
import projectone1 from '../Assets/projectone1.png'
import { fadeIn } from './Variants';
import { motion } from 'framer-motion';

import React, { useEffect, useState } from 'react';

import { FaEye } from 'react-icons/fa'
export default function Projects() {
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset;

            // Show content when scrolling down
            if (currentScrollTop > lastScrollTop) {
                setShouldAnimate(true); // Trigger animation when scrolling down
            } else {
                setShouldAnimate(false); // Optional: stop animation when scrolling up
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // Prevent negative values
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup
    }, [lastScrollTop]);

  return (
    <div>
      <div className='project-container'>
        {/* <button className='Pdot'></button> */}
        <span className='Ptitle'><strong>PROJECTS</strong></span>
        </div>
        

        <div className='flexbox'>
        <motion.div 
            className='card card1'
            variants={fadeIn('up', 0.3)}
                        initial="hidden" 
                        animate={shouldAnimate ? "show" : "hidden"} // Control animation based on scroll
                        whileInView="show" // Optional: ensure it shows when in view
                        viewport={{ once: false }} // Allow multiple triggers
        >
                        <div className='poster'>
                    <div className='title'>VR ZONE</div>
                    <div className='used'><img src={figma}/></div>
                    <button className='eye'><FaEye color='black'/></button>
                </div>
            </motion.div>

            <motion.div 
            className='card card1'
            variants={fadeIn('up', 0.3)}
                        initial="hidden" 
                        animate={shouldAnimate ? "show" : "hidden"} // Control animation based on scroll
                        whileInView="show" // Optional: ensure it shows when in view
                        viewport={{ once: false }} // Allow multiple triggers
          
        >
                <div className='poster'>
                    <div className='title'>VR ZONE</div>
                    <div className='used'><img src={figma}/></div>
                    <button className='eye'><FaEye color='black'/></button>
                </div>
                </motion.div>

            <motion.div 
            className='card card1'
            variants={fadeIn('up', 0.3)}
                        initial="hidden" 
                        animate={shouldAnimate ? "show" : "hidden"} // Control animation based on scroll
                        whileInView="show" // Optional: ensure it shows when in view
                        viewport={{ once: false }} // Allow multiple triggers
         
        >
                <div className='poster'>
                    <div className='title'>VR ZONE</div>
                    <div className='used'><img src={figma}/></div>
                    <button className='eye'><FaEye color='black'/></button>
                </div>
                </motion.div>


            <motion.div 
            className='card card1'
            variants={fadeIn('up', 0.3)}
                        initial="hidden" 
                        animate={shouldAnimate ? "show" : "hidden"} // Control animation based on scroll
                        whileInView="show" // Optional: ensure it shows when in view
                        viewport={{ once: false }} // Allow multiple triggers
        >
                <div className='poster'>
                    <div className='title'>VR ZONE</div>
                    <div className='used'><img src={figma}/></div>
                    <button className='eye'><FaEye color='black'/></button>
                </div>
                </motion.div>

            <motion.div 
            className='card card1'
            
            variants={fadeIn('up', 0.3)}
                        initial="hidden" 
                        animate={shouldAnimate ? "show" : "hidden"} // Control animation based on scroll
                        whileInView="show" // Optional: ensure it shows when in view
                        viewport={{ once: false }} // Allow multiple triggers
      
        >
                <div className='poster'>
                    <div className='title'>VR ZONE</div>
                    <div className='used'><img src={figma}/></div>
                    <button className='eye'><FaEye color='black'/></button>
                </div>
                </motion.div>


            <motion.div 
            className='card card1'
            variants={fadeIn('up', 0.3)}
            initial="hidden" 
            animate={shouldAnimate ? "show" : "hidden"} // Control animation based on scroll
            whileInView="show" // Optional: ensure it shows when in view
            viewport={{ once: false }} // Allow multiple triggers
       
        >
                <div className='poster'>
                    <div className='title'>VR ZONE</div>
                    <div className='used'><img src={figma}/></div>
                    <button className='eye'><FaEye color='black'/></button>
                </div>
                </motion.div>
        </div>


    </div>
  )
}
