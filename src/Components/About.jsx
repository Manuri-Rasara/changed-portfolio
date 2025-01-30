import React, { useEffect, useState } from 'react';
import './About.css';
 import user from '../Assets/user.png'; // Comment out the image import if not needed
import { motion } from 'framer-motion';
import { fadeIn } from './Variants';

export default function About() {
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
        <>
            <div className='content'  id="About">
                <div className='about-container'>
                    {/* <button className='dot'></button> */}
                    <span className='title'><strong>ABOUT</strong></span>
                </div>
                <br/><br/>

                {/* Commenting out the image section */}
                {/* 
                {isSmallScreen ? (
                    // Show content without animation on small screens
                    <div className='user'>
                        <img src={user} alt="User" />
                    </div>
                ) : (
                    // Use motion for larger screens
                    <motion.div
                        initial="hidden"
                        animate={show ? "show" : "hidden"}
                        variants={fadeIn("left", 0.2)} // Fade in from the left for the image
                        className='user'
                    >
                        <img src={user} alt="User" />
                    </motion.div>
                )}
                */}

                {isSmallScreen ? (
                    // Show content without animation on small screens
                    <div className='fullcontent'>
                        <p>Hi! 👋, I am Manuri Rasara, an undergraduate at the University of Ruhuna and a passionate software engineer.</p>
                        <br/>
                        <strong>Creative Origins ✨</strong> <br/><br/>
                        <p>Began my journey in 2019 by selling unique illustrations on Shutterstock 
                        and social media, sparking my passion for digital design.<br/><br/></p>
                        <strong>Self-Taught Developer 💻</strong> <br/><br/>
                        <p>Driven by curiosity, I expanded my knowledge in frontend development  
                        beyond HTML, CSS, and JavaScript, diving into advanced frameworks and libraries to create 
                        dynamic, interactive interfaces.<br/><br/></p>
                        <strong>Art Meets Code 🎨</strong><br/><br/>
                        <p>I blend my artistic talents with technical skills to craft user-centered  
                        designs that are both visually appealing and functional.<br/><br/></p>
                        <strong>Future-Focused 🎯</strong><br/><br/>
                        <p>I’m committed to continuous growth as a software engineer, web developer, 
                        and UI/UX designer, aiming to create seamless, innovative digital experiences. 
                        Let me know if there are specific languages or frameworks you'd like to emphasize!<br/></p>
                    </div>
                ) : (
                    // Use motion for larger screens
                    <motion.div 
                        initial="hidden"
                        animate={show ? "show" : "hidden"}
                        variants={fadeIn("right", 0.2)} // Fade in from the right for the text
                        className='fullcontent'
                    >
                       <p className='firstline'>Hi! 👋, I am Manuri Rasara, an undergraduate at the University of Ruhuna and a passionate software engineer.</p>
                        <br/>
                        <strong>Creative Origins ✨</strong> <br/><br/>
                        <p>Began my journey in 2019 by selling unique illustrations on Shutterstock 
                        and social media, sparking my passion for digital design.<br/><br/></p>
                        <strong>Self-Taught Developer 💻</strong> <br/><br/>
                        <p>Driven by curiosity, I expanded my knowledge in frontend development  
                        beyond HTML, CSS, and JavaScript, diving into advanced frameworks and libraries to create 
                        dynamic, interactive interfaces.<br/><br/></p>
                        <strong>Art Meets Code 🎨</strong><br/><br/>
                        <p>I blend my artistic talents with technical skills to craft user-centered  
                        designs that are both visually appealing and functional.<br/><br/></p>
                        <strong>Future-Focused 🎯</strong><br/><br/>
                        <p>I’m committed to continuous growth as a software engineer, web developer, 
                        and UI/UX designer, aiming to create seamless, innovative digital experiences. 
                        Let me know if there are specific languages or frameworks you'd like to emphasize!<br/></p>
                    </motion.div>
                )}
            </div>
            {/* <div className='button'>
                <button>RESUME</button>
            </div> */}
        </>
    );
}
