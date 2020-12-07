import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Contact from './Contact'
import bottomWave from '../images/bottom_wave.svg'
import mail from '../images/mail.svg'

function Footer() {
  return (
    <footer>
      <img className="wave" src={bottomWave} alt="" />
      <div className="content">
        <div className="container">
          <h1>Get in touch!</h1>
          <div className="contact">
            <Contact />
            <img className="mail" src={mail} alt="mailing" />
          </div>
          <div className="links">
            <a href="https://github.com/ColtonZP" className="icon">
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a href="https://www.linkedin.com/in/colton-pemberton-1a7292163/" className="icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
