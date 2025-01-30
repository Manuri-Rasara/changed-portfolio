import './Contact.css';
import { FaArrowRightLong } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from './Variants';
import React, { useEffect, useRef, useState } from 'react';
import user from '../Assets/user.png'

export default function Contact() {
    const [show, setShow] = useState(false); // Initially set to false to hide content
    const contactRef = useRef(null); // Create a ref for the Contact component

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

        if (contactRef.current) {
            observer.observe(contactRef.current); // Observe the Contact component
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current); // Cleanup observer
            }
        };
    }, []);

    return (
        <div ref={contactRef}> {/* Attach ref to the main div */}
            <div className='contactcontent' id="contact">
                <motion.p
                    initial="hidden"
                    animate={show ? "show" : "hidden"}
                    variants={fadeIn("left", 0.2)} // Fade in from the left
                >
                <img src={user} className='pic'/>Let’s talk about a project, collaboration, or an idea you may have.<strong> I prefer working as a software engineer.</strong>
                </motion.p>
                <div className='touch'>
                <a href="mailto:manurirasarahewage@gmail.com">
                <button>GET IN TOUCH</button>
                </a>
                


                </div>
            </div>
            
        </div>
    );
}
