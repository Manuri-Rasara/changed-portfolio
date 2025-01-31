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
            <li><a href='https://www.linkedin.com/in/manurirasarahewage'>LinkedIn</a></li>
            <li><a href='https://github.com/Manuri-Rasara'>GitHub</a></li>
            <li><a href='https://www.instagram.com/manuri_rasara?igsh=MXRjdDNwN3I0N2prbA=='>Instargrame</a></li>
        </ul>

        
   
</footer>

    </div>
  )
}
