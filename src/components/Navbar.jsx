import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';
import useSiteMetadata from './SiteMetadata';

const toggleHamburger = ({ active, setNavState }) => {
  const newNavBarActiveClass = !active ? 'is-active' : '';
  setNavState({
    active: !active,
    navBarActiveClass: newNavBarActiveClass,
  });
};

const Navbar = () => {
  const { logo, title } = useSiteMetadata();
  const [navState, setNavState] = useState({
    active: false,
    navBarActiveClass: '',
  });

  const { active, navBarActiveClass } = navState;

  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            {logo ? <img src={logo} alt="Robert Durgin" style={{ width: '88px' }} /> : title}
          </Link>
          {/* Hamburger menu */}
          <div
            tabIndex={0}
            role="button"
            aria-expanded={active}
            aria-controls="navMenu"
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => toggleHamburger({
              active: navState.active,
              setNavState,
            })
            }
            onKeyDown={() => toggleHamburger({
              active: navState.active,
              setNavState,
            })
            }
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`} role="menu">
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/tags">
              Topics
            </Link>
            <Link className="navbar-item" to="/">
              Skills
            </Link>
          </div>
          <div className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/RBDurgin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FontAwesomeIcon icon={faGithub} color="black" />
              </span>
            </a>
            <a
              title="stack-overflow"
              className="navbar-item"
              href="https://stackoverflow.com/users/3132/robert-durgin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FontAwesomeIcon icon={faStackOverflow} color="black" />
              </span>
            </a>
            <a
              title="linkedin"
              className="navbar-item"
              href="https://www.linkedin.com/in/RBDurgin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FontAwesomeIcon icon={faLinkedin} color="black" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
