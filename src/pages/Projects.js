import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
  return (

    <div className="bump">
      <div className="stack-it">

        <div className="project-container card-three">
              <div className="proj-left">
                <h1 className='proj-title '>Blanched Almond</h1>
                <img className="proj-screenshot" src="BA1.jpg" alt="Blanched Almond Screenshot" />

              </div>
              <div className="proj-right">
                <p className="proj-deck">Blanched Almond is a fun and interactive way to sharpen your css skills. There are 142 unique colors you can call by name, how many can you get correct?  Levels are grouped by color family and increase in both number of colors and difficulty. Each level’s colors are loaded randomly for extra fun! </p>
                <div className="proj-gitbox">
                <a href="https://github.com/BrockMolmen/blanched-almond" target="_blank" rel="noopener noreferrer" alt="GitHub" title="GitHub"><FontAwesomeIcon icon={faGithub} size="3x" className="icon" /></a>
                <a href="https://brockmolmen.github.io/blanched-almond/" target="_blank" rel="noopener noreferrer"  alt="Blandched Almond - live site" title="Blandched Almond - live site"><FontAwesomeIcon icon={faDesktop} size="3x" className="icon" /></a>
                </div>
                
                <p className="proj-tech">Javascript, HTML, CSS</p>
              </div>
            </div>

        <div className="project-container card-one">
          <div className="proj-left">
            <h1 className='proj-title'>Super Set</h1>
            <img className="proj-screenshot" src="SuperSet1.jpg" alt="Super Set Screenshot" />

          </div>
          <div className="proj-right">
            <p className="proj-deck">The new home of your Super Nintendo collection! This site allows users to search for their favorite game titles. Once a user is registered, they can save games to their “Super Set”. Hoping to hit a few nostalgic strings, the overall theme and layout are pull directly from the Super Nintendo console.</p>
            <div className="proj-gitbox">
            <a href="https://github.com/BrockMolmen/super-set-frontend" target="_blank" rel="noopener noreferrer" alt="GitHub" title="GitHub"><FontAwesomeIcon icon={faGithub} size="3x" className="icon" /></a>
            </div>
            
            <p className="proj-tech">React, Express, Node.js, PostgreSQL, Sass</p>
          </div>
        </div>

        <div className="project-container card-two">
          <div className="proj-left">
            <h1 className='proj-title'>Soul Sip'n</h1>
            <img className="proj-screenshot" src="SoulSipn1.jpg" alt="Soul Sip'n Screenshot" />

          </div>
          <div className="proj-right">
            <p className="proj-deck">A site dedicated to the health benefits of drinking tea. Users can browse by their desired benefit and view all teas associated. Members of the site are able save benefits to their profiles and discover new teas this way. </p>
            <div className="proj-gitbox">
            <a href="https://github.com/laurennguyen395/soulsipn-pern-auth-frontend" target="_blank" rel="noopener noreferrer" alt="GitHub" title="GitHub"><FontAwesomeIcon icon={faGithub} size="3x" className="icon" /></a>
            </div>
            <p className="proj-tech">React, Express, Node.js, PostgreSQL, Sass, React-Bootstrap, React-Spring</p>
          </div>
        </div>


        <div className="project-container card-three">
          <div className="proj-left">
            <h1 className='proj-title '>CSS Color Quiz</h1>
            <img className="proj-screenshot" src="CCQ1.jpg" alt="Color Quiz Screenshot" />

          </div>
          <div className="proj-right">
            <p className="proj-deck">Blanched Almond alpha version - color matching quiz based on color names that can be used in Cascading Style Sheets (CSS) for web design</p>
            <div className="proj-gitbox">
            <a href="hhttps://github.com/BrockMolmen/css-color-quiz" target="_blank" rel="noopener noreferrer" alt="GitHub" title="GitHub"><FontAwesomeIcon icon={faGithub} size="3x" className="icon" /></a>
            <a href="https://brockmolmen.github.io/css-color-quiz/" target="_blank" rel="noopener noreferrer"  alt="Blandched Almond - live site" title="Blandched Almond - live site"><FontAwesomeIcon icon={faDesktop} size="3x" className="icon" /></a>
            </div>
            
            <p className="proj-tech">Javascript, HTML, CSS</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
