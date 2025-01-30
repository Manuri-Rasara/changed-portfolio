import React, { useEffect, useState } from 'react';
import './Education.css'
import { motion } from 'framer-motion';
import { fadeIn } from './Variants';

export default function Time() {

  const [show, setShow] = useState(false); // Initially set to false to hide content
    const [isSmallScreen, setIsSmallScreen] = useState(false); // Track if the screen is small

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset;

            // Show content only when scrolling down
            if (currentScrollTop > 0) {
                setShow(true); // Show content when scrolled down
            } else {
                setShow(false); // Hide content at the top of the page
            }
        };

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768); // Change 768 to the desired max width
        };

        // Add scroll and resize event listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        // Initial check for screen size
        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup
            window.removeEventListener('resize', handleResize); // Cleanup
        };
    }, []);



  return (
    <div className="component-wrapper">
    
      <motion.div className='eduflexbox'
      
      initial="hidden"
                        animate={show ? "show" : "hidden"}
                        variants={fadeIn("left", 0.4)} >
      <div className='edutitle'>EDUCATION</div>
        <div className='educard'>
          <h3 className='edumaintitle'>GCE ORDINARY LEVEL</h3>
          <p>I successfully completed my Ordinary Level (O/L) examination in 2016 at Dankotuwa Girls College. 
            This achievement marked an important milestone in my academic journey, building a strong foundation 
            for my future studies and personal growth</p>

        </div>


        <div className='educard'>
          <h3 className='edumaintitle'>GCE ADVANCED LEVEL</h3>
          <p>I completed my Advanced Level (A/L) examination in the physical science stream in 2019 at Dankotuwa 
            Girls College. This achievement strengthened my foundation in mathematics and physics, preparing me for 
            further studies and career development.</p>

        </div>



        <div className='educard'>
          <h3 className='edumaintitle'>BCS DEGREE IN COMPUTER SCIENCE</h3>
          <p>I am an undergraduate at the University of Ruhuna, pursuing a degree in Computer Science. 
            This academic journey has allowed me to deepen my knowledge in various areas of computing, 
            including programming, algorithms, and software development, as I work towards building a 
            strong foundation for my future career in technology.</p>

        </div>

        

        
      </motion.div>

    </div>
  )
}
