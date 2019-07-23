import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../img/logo.svg';

const SocialLinks = () => (
  <div className="column is-4 social">
    <a title="github" href="https://github.com/RBDurgin/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} color="black" style={{ width: '1em', height: '1em' }} />
    </a>
    <a
      title="stack-overflow"
      href="https://stackoverflow.com/users/3132/robert-durgin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        icon={faStackOverflow}
        color="black"
        style={{ width: '1em', height: '1em' }}
      />
    </a>
    <a
      title="linkedin"
      href="https://www.linkedin.com/in/RBDurgin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} color="black" style={{ width: '1em', height: '1em' }} />
    </a>
  </div>
);

const Footer = () => (
  <footer className="footer has-background-black has-text-white-ter">
    <div className="content has-text-centered">
      {/* <img src={logo} alt="Robert Durgin" style={{ width: '14em', height: '10em' }} /> */}
    </div>
    <div className="content has-text-centered has-background-black has-text-white-ter">
      <div className="container has-background-black has-text-white-ter">
        <div className="columns">
          <div className="column is-4">
            <section className="menu">
              <ul className="menu-list">
                <li>
                  <Link to="/" className="navbar-item">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/about">
                    About
                  </Link>
                </li>                
              </ul>
            </section>
          </div>
          <div className="column is-4">
            <section>
              <ul className="menu-list">
                <li>
                  <Link className="navbar-item" to="/blog">
                    Latest Stories
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;