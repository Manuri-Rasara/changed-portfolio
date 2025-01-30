import React, { useRef, useEffect } from 'react';
import './Homecontent.css';
import angle from '../Assets/angle.png';
import { motion } from 'framer-motion';
import arrowdown from '../Assets/arrowdown.png';
import power from '../Assets/power.png'

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
      {/* Fade-in effect for main content */}
      <motion.div
        className="maincontent"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        <span>DIGITAL <img src={power} className='power'></img><br /></span>
        <span>ARCHITECT<br /></span>
      </motion.div>

      {/* Fade-in effect for subcontent */}
      <motion.div
        className="subcontent"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        <span className='SmalltextHome'>Specialized in -  <br />Software Engineering | <br />Web Development | UI/UX<br /></span>
      </motion.div>

      {/* Fade-in effect for circle container */}
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
