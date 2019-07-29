import React from 'react';
import PropType from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = ({ linkedInUrl, stackoverflowUrl, githubUrl }) => (
  <div className="column is-4 social">
    {githubUrl && (
      <a title="github" href={githubUrl} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} color="black" style={{ width: '1em', height: '1em' }} />
      </a>
    )}
    {stackoverflowUrl && (
      <a title="stack-overflow" href={stackoverflowUrl} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faStackOverflow}
          color="black"
          style={{ width: '1em', height: '1em' }}
        />
      </a>
    )}
    {linkedInUrl && (
      <a title="linkedin" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} color="black" style={{ width: '1em', height: '1em' }} />
      </a>
    )}
  </div>
);

SocialLinks.propTypes = {
  linkedInUrl: PropType.string,
  stackoverflowUrl: PropType.string,
  githubUrl: PropType.string,
};

SocialLinks.defaultProps = {
  linkedInUrl: null,
  stackoverflowUrl: null,
  githubUrl: null,
};

export default SocialLinks;
