import React from 'react';
import PropType from 'prop-types';
import { Link } from 'gatsby';
import SocialLinks from './SocialLinks';

const Footer = ({ linkedInUrl, stackoverflowUrl, githubUrl }) => (
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
          <SocialLinks
            linkedInUrl={linkedInUrl}
            stackoverflowUrl={stackoverflowUrl}
            githubUrl={githubUrl}
          />
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  linkedInUrl: PropType.string,
  stackoverflowUrl: PropType.string,
  githubUrl: PropType.string,
};

Footer.defaultProps = {
  linkedInUrl: null,
  stackoverflowUrl: null,
  githubUrl: null,
};

export default Footer;
