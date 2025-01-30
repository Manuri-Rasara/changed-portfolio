import React, { useEffect, useState } from 'react';
import './Technologies.css';
import HTML from '../Assets/HTML.png';
import CSS from '../Assets/CSS.png';
import JS from '../Assets/JS.png';
import PHP from '../Assets/PHP.png';
import Java from '../Assets/Java.png';
import MySql from '../Assets/MySql.png';
import Node from '../Assets/Node.png';
import Ract from '../Assets/React.png';
import Ai from '../Assets/Ai.png';
import Ps from '../Assets/PS.png';
import figma from '../Assets/figma.png';
import Xd from '../Assets/Xd.png';
import c from '../Assets/c.png';
import cs from '../Assets/cs.png';
import py from '../Assets/py.png';
import tcss from '../Assets/tcss.png';
import { motion } from 'framer-motion';
import { fadeIn } from './Variants';

export default function Technologies() {
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
       <div className='maintech'>
            <motion.div
                initial="hidden"
                animate={show ? "show" : "hidden"}
                variants={fadeIn("up", 0.7)}
                className='tech'
            >
                <p className='title'>TECH STACK</p>
                <div className='imageslogo'>
                <img src={HTML} alt="HTML" />
                <img src={CSS} alt="CSS" />
                <img src={JS} alt="JavaScript" />
                <img src={PHP} alt="PHP" />
                <img src={c} alt="C" />
                <img src={cs} alt="C Sharp" />
                <img src={py} alt="Python" />
                <img src={tcss} alt="Tailwind CSS" />
                <img src={Java} alt="Java" />
                <img src={MySql} alt="MySQL" />
                <img src={Node} alt="Node.js" />
                <img src={Ract} alt="React" />
                <img src={Ai} alt="Adobe Illustrator" />
                <img src={Ps} alt="Adobe Photoshop" />
                <img src={figma} alt="Figma" />
                <img src={Xd} alt="Adobe XD" />
                </div>
            </motion.div></div>
       
    );
}
