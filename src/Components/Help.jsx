import './Help.css';
import { motion } from 'framer-motion';
import { fadeIn } from './Variants';
import React, { useEffect, useRef, useState } from 'react';

export default function Help() {
    const [show, setShow] = useState(false); // Initially set to false to hide content
    const helpRef = useRef(null); // Create a ref for the Help component

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Set show state based on intersection
                if (entry.isIntersecting) {
                    setShow(true); // Show content when in view
                } else {
                    setShow(false); // Hide content when out of view
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the component is in view
        );

        if (helpRef.current) {
            observer.observe(helpRef.current); // Observe the Help component
        }

        return () => {
            if (helpRef.current) {
                observer.unobserve(helpRef.current); // Cleanup observer
            }
        };
    }, []);

    return (
        <div ref={helpRef}> {/* Attach ref to the main div */}
            <div className='help-container'>
                {/* <button className='helpdot'></button> */}
                <span className='helptitle'><strong>I CAN HELP YOU WITH</strong></span>
            </div>
           <div className='helpparagraph'>
           I love helping solve challenges, whether in web development, 
           design, or software engineering. I'm eager to contribute by 
           addressing technical issues or bringing fresh ideas to creative 
           projects. My goal is to support others in achieving their objectives.
           </div>
            <div className='cardflexbox'>
                <motion.div
                    className='helpcard'
                    initial="hidden"
                    animate={show ? "show" : "hidden"}
                    variants={fadeIn("right", 0.2)} // Fade in from the right for the first card
                >
                    <div className='no'>01</div>
                    <div className='cardtitle'>DEVELOPMENT</div>
                    <p className='cardcontent'>Bringing visuals to life through developing highly functional software and web solutions.</p>
                </motion.div>

                <motion.div
                    className='helpcard'
                    initial="hidden"
                    animate={show ? "show" : "hidden"}
                    variants={fadeIn("left", 0.5)} // Fade in from the left for the second card
                >
                    <div className='no'>02</div>
                    <div className='cardtitle'>DESIGN</div>
                    <p className='cardcontent'>Crafting engaging UI/UX designs that blend aesthetic appeal with seamless user interactions.</p>
                </motion.div>
            </div>
        </div>
    );
}
