import React, { useEffect, useState } from 'react';
import './Project1.css'
import card1project from '../Assets/card1project.png'
import card2project from '../Assets/card2project.png'
import card3project from '../Assets/card3project.png'
import card4project from '../Assets/card4project.png'
import card5project from '../Assets/card5project.png'
import card6project from '../Assets/card6project.png'
import {FaArrowRight} from 'react-icons/fa'
import { motion } from 'framer-motion';
import { fadeIn } from './Variants';

export default function Project1() {

    const [show, setShow] = useState(false); // State to control visibility

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
    <div className='Projects' id="work">
    <div className='projecttitle'>PROJECTS</div>
    <div className='allcards'>
      <div className='Cardflexbox'>
        <motion.div className='Card Card1'
        initial="hidden"
        animate={show ? "show" : "hidden"}
        variants={fadeIn("up", 0.9)}>


            <div className='Cardcontent'>
        <div className='Cardmaintext'>VR ZONE</div>
            <div className='Cardsubtext'>A clean, intuitive UI/UX website designed in Figma.</div>
            </div>
            <div className='cardarrow'><button className='arrbtn' onClick={() => window.location.href = 'https://www.behance.net/gallery/213995265/VR-ZONE-UIUX-DESIGN'}><FaArrowRight /></button> </div>
            <div className='cardposter'>
           <img src={card1project}/>
            
            
            
            </div>
        </motion.div>







        <motion.div className='Card Card2'
        initial="hidden"
        animate={show ? "show" : "hidden"}
        variants={fadeIn("up", 0.9)}>

            
            <div className='Cardcontent'>
        <div className='Card2maintext'>PORTFOLIO</div>
            <div className='Card2subtext'>A clean, intuitive UI/UX website designed in Figma.</div>
            </div>
            <div className='cardarrow'><button className='arrbtn' onClick={() => window.location.href = 'https://www.behance.net/gallery/215032017/PORTFOLIO-UIUX-DESIGN'} ><FaArrowRight /></button> </div>
            <div className='cardposter'>
           <img src={card2project}/>
            
            
            
            </div>
        </motion.div>


        <motion.div className='Card Card6'
        initial="hidden"
        animate={show ? "show" : "hidden"}
        variants={fadeIn("up", 0.9)}>

            
            <div className='Cardcontent'>
        <div className='Card6maintext'>FOOD DELIVERY APP </div>
            <div className='Card6subtext'>UI/UX design for a seamless and engaging food delivery app, created in Figma.</div>
            </div>
            <div className='cardarrow'><button className='arrbtn' onClick={() => window.location.href = 'https://www.behance.net/gallery/214803811/UIUX-DESIGN-FOOD-DELIVERY-APP'}><FaArrowRight /></button> </div>
            <div className='cardposter'>
           <img src={card6project}/>
            
            
            
            </div>
        </motion.div>





        <motion.div className='Card Card3'
        initial="hidden"
        animate={show ? "show" : "hidden"}
        variants={fadeIn("up", 0.9)}>

            
            <div className='Cardcontent'>
        <div className='Card3maintext'>PORTFOLIO</div>
            <div className='Card3subtext'>Elegant and intuitive UI/UX design created in Figma.</div>
            </div>
            <div className='cardarrow'><button className='arrbtn' onClick={() => window.location.href = 'https://www.behance.net/gallery/215011821/Portfolio-UIUX-Design'}><FaArrowRight /></button> </div>
            <div className='cardposter'>
           <img src={card3project}/>
            
            
            
            </div>
        </motion.div>




        <motion.div className='Card Card4'
        initial="hidden"
        animate={show ? "show" : "hidden"}
        variants={fadeIn("up", 0.9)}>

            
            <div className='Cardcontent'>
        <div className='Card4maintext'>WEB SITE</div>
            <div className='Card4subtext'>User-focused UI/UX design crafted in Figma.</div>
            </div>
            <div className='cardarrow'><button className='arrbtn' onClick={() => window.location.href = 'https://www.behance.net/gallery/215616801/UIUX-DESIGN'}><FaArrowRight /></button> </div>
            <div className='cardposter'>
           <img src={card4project}/>
            
            
            
            </div>
        </motion.div>






        <motion.div className='Card Card5'
        initial="hidden"
        animate={show ? "show" : "hidden"}
        variants={fadeIn("up", 0.9)}>

            
            <div className='Cardcontent'>
        <div className='Card5maintext'>WEB SITE</div>
            <div className='Card5subtext'>A well-organized, user-friendly website design with an emphasis on intuitive UI/UX, crafted in Figma.</div>
            </div>
            <div className='cardarrow'><button className='arrbtn' onClick={() => window.location.href = 'https://www.behance.net/gallery/215658395/UI-UX-DESIGN'}><FaArrowRight /></button> </div>
            <div className='cardposter'>
           <img src={card5project}/>
            
            
            
            </div>
        </motion.div>


        


        




        




        



        
      </div>
    </div>
    </div>
    </>
  )
}
