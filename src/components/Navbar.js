import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../img/logo.svg';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Robert Durgin" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
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
              <a title="stack-overflow" 
                 className="navbar-item"
                 href="https://stackoverflow.com/users/3132/robert-durgin" 
                 target="_blank" 
                 rel="noopener noreferrer"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faStackOverflow} color="black" />
                </span>
              </a>
              <a title="linkedin" 
                 className="navbar-item"
                 href="https://www.linkedin.com/in/robert.durgin" 
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
    )
  }
};

export default Navbar;
