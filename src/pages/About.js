import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className="bump">
      <div className="project-container">
        <div className="proj-left">
          <div className="center-it">
            <h1 className="hello">Hello!</h1>
          </div>
          <img src="BrockMolmen.jpg" alt="Brock Molmen" className="bio-pic" />
        <div className="email">
          <p>BrockMolmen@gmail.com</p>
        </div>
        </div>
        <div className="proj-right">
          <div className="center-it">
            <ul className="about-links">
              <li><a href="https://www.linkedin.com/in/brockmolmen/" target="_blank" rel="noopener noreferrer" alt="LinkedIn" title="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} className="icon-1" /></a></li>
              <li><a href="https://github.com/BrockMolmen" target="_blank" rel="noopener noreferrer" alt="GitHub" title="GitHub"><FontAwesomeIcon icon={faGithub} className="icon-2" /></a></li>
              <li><a href="mailto:BrockMolmen@gmail.com" alt="Email" title="Email"><FontAwesomeIcon icon={faEnvelope} className="icon-3" /></a></li>
              <li><a href="BrockMolmen_resume.pdf" target="_blank" rel="noopener noreferrer" alt="Resume" title="Resume"><FontAwesomeIcon icon={faFilePdf} className="icon-4" /></a></li>
            </ul>
          </div>
          <p>My name is Brock. I am a full-stack software engineer, focused on innovative front-end development. I enjoy writing code that looks as good as it functions. Transitioning from a career in the ever-evolving airline industry, I’m able to adapt and learn quickly in new situations and rely on great communication to accomplish goals in a team.</p>
          <p>I recently moved from Minneapolis, MN to Seattle, WA with my husband and dog, Gus. When I’m not behind my computer, I enjoy collecting and playing retro video games, trekking around the globe, skateboarding with my dog, and getting deep in conversations about music. I frequently use outdated slang like “rad” and “boss.” Let's grab a cold press and chat.</p>
        </div>
      </div>
    </div>
  )
}

export default About