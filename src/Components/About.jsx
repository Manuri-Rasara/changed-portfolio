import React, { useEffect, useState } from 'react';
import './About.css';
import user from '../Assets/user.png';
import { motion } from 'framer-motion';
import { fadeIn } from './Variants';

export default function About() {
    const [show, setShow] = useState(false); // Initially set to false to hide content

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

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup
    }, []);

    return (
        <>
            <div className='content'>
                <div  className='about-container' initial="hidden" 
            animate="visible"    
            >
                    <button className='dot'></button>
                    <span className='title'><strong >ABOUT</strong></span>
                </div>
                <br/><br/>
                <motion.div
                    initial="hidden"
                    animate={show ? "show" : "hidden"}
                    variants={fadeIn("left", 0.2)} // Fade in from the left for the image
                    className='user'
                >
                    <img src={user} alt="User" />
                </motion.div>
                <motion.div 
                    initial="hidden"
                    animate={show ? "show" : "hidden"}
                    variants={fadeIn("right", 0.2)} // Fade in from the right for the text
                    className='fullcontent'>
                    <p>Hi! 👋, I am Manuri Rasara, an undergraduate at the University of Ruhuna and a passionate software engineer.</p>
                    <br/>
                    <strong>Creative Origins ✨</strong> <br/>
                    <p>Began my journey in 2019 by selling unique illustrations on Shutterstock 
                    and social media, sparking my passion for digital design.<br/><br/></p>
                    <strong>Self-Taught Developer 💻</strong> <br/>
                    <p>Driven by curiosity, I expanded my knowledge in frontend development  
                    beyond HTML, CSS, and JavaScript, diving into advanced frameworks and libraries to create 
                    dynamic, interactive interfaces.<br/><br/></p>
                    <strong>Art Meets Code 🎨</strong><br/>
                    <p>I blend my artistic talents with technical skills to craft user-centered  
                    designs that are both visually appealing and functional.<br/><br/></p>
                    <strong>Future-Focused 🎯</strong><br/>
                    <p>I’m committed to continuous growth as a software engineer, web developer, 
                    and UI/UX designer, aiming to create seamless, innovative digital experiences. 
                    Let me know if there are specific languages or frameworks you'd like to emphasize!<br/></p>
                </motion.div>
            </div>
            <div className='button '>
                <button>RESUME</button>
            </div>
        </>
    );
}
