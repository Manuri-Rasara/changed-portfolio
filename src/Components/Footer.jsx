import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <div>
      <footer class="lastfooter">
        <span className='footercopy'>&copy;2024  &nbsp;&nbsp;    All Rights Reserved. Design & Coded with ❤️</span>
        

        <ul className='footerlinks'>
            <li><a href='https://www.linkedin.com/in/manuri-hewage-953930283/'>LinkedIn</a></li>
            <li><a href='https://github.com/Manuri-Rasara'>GitHub</a></li>
            <li><a href='#'>Instargrame</a></li>
        </ul>

        
   
</footer>

    </div>
  )
}
