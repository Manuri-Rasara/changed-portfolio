import React, { useRef, useEffect } from 'react';
import './Homecontent.css';
import angle from '../Assets/angle.png';
import { motion } from 'framer-motion';
import arrowdown from '../Assets/arrowdown.png';
import power from '../Assets/power.png'
import { BsBehance, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { BiRightArrow } from 'react-icons/bi';

// Define fade-in variant
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } }
};

export default function Homecontent() {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    if (text) {
      const textContent = text.textContent; // Get the text content
      text.innerHTML = ''; // Clear original text

      textContent.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.style.transform = `rotate(${i * 14}deg)`; // Adjust rotation for spacing
        span.textContent = char; // Set character
        text.appendChild(span); // Append span to the text container
      });
    }
  }, []);

  return (

    
    <>

<motion.div
        className="subcontent"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        
      </motion.div> 
      {/* Fade-in effect for main content */}
      <motion.div
        className="maincontent"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
         <p className='SmalltextHome'>Specialized in -Software Engineering | Web Development | UI/UX</p>
        <span>PORTFOLIO<img src={power} className='power'></img><br /></span>
        <div className='allicons'>
        <span className='icon'><BsLinkedin fontSize={12} color='rgb(173, 169, 169)'/><a href='https://www.linkedin.com/in/manurirasarahewage'>&nbsp;&nbsp;/Linkedin</a></span><span className='icon'><BsGithub fontSize={12} color='rgb(173, 169, 169)'/><a href='https://github.com/Manuri-Rasara'>&nbsp;&nbsp;/Github</a></span><span className='icon'><BsBehance fontSize={12} color='rgb(173, 169, 169)' /><a href='https://www.behance.net/manuri'>&nbsp;&nbsp;/Behance</a></span><span className='icon'><BsInstagram fontSize={12} color='rgb(173, 169, 169)'/> <a href='https://www.instagram.com/manuri_rasara?igsh=MXRjdDNwN3I0N2prbA=='>&nbsp;&nbsp;/Instargrame</a></span>
        </div>

        <div className='startbtn' onClick={() => window.location.href = '#About'}>
          <span><BiRightArrow className='rightarrw' />Go</span>
        </div>

       
       
      </motion.div>

   

      {/* Fade-in effect for subcontent */}
  

    
     <motion.div
        className="circle"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="logo"></div>
        <div className="text">
          <p ref={textRef}>Located in the Sri Lanka</p>
        </div>
      </motion.div> 

      {/* Optionally, fade-in for the arrow down icon */}
      {/* <motion.div className="arrowdown" variants={fadeInVariant} initial="hidden" animate="visible">
        <a href='#'><img src={arrowdown} alt="Arrow Down" /></a>
      </motion.div> */}
    </>
  );
}
