import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
  return <div className="Footer">
    <ul>
    <li><a href="https://www.linkedin.com/in/brockmolmen/" target="_blank" rel="noopener noreferrer"  alt="LinkedIn" title="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} size="2x" className="icon-1" /></a></li>
          <li><a href="https://github.com/BrockMolmen" target="_blank" rel="noopener noreferrer"  alt="GitHub" title="GitHub"><FontAwesomeIcon icon={faGithub} size="2x" className="icon-2" /></a></li>
          <li><a href="mailto:BrockMolmen@gmail.com"  alt="Email" title="Email"><FontAwesomeIcon icon={faEnvelope} size="2x" className="icon-3" /></a></li>
          <li><a href="BrockMolmen_resume.pdf" target="_blank" rel="noopener noreferrer"  alt="Resume" title="Resume"><FontAwesomeIcon icon={faFilePdf} size="2x" className="icon-4" /></a></li>
    </ul>
  </div>
}

export default Footer;

