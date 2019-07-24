import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Navbar from './Navbar';
import './all.sass';
import useSiteMetadata from './SiteMetadata';
import GoogleAnalytics from './GoogleAnalytics';
import GoogleAdSense from './GoogleAdSense';

const TemplateWrapper = ({ children }) => {
  const {
    title, description, adSenseClient, gaTrackingId,
  } = useSiteMetadata();

  return (
    <div>
      <GoogleAnalytics trackingId={gaTrackingId} />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Robert Durgin" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <GoogleAdSense adSenseClient={adSenseClient} />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

TemplateWrapper.defaultProps = {
  children: null,
};

export default TemplateWrapper;
