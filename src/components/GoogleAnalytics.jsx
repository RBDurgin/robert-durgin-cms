import React from 'react';
import PropType from 'prop-types';
import { Helmet } from 'react-helmet';

const GoogleAnalytics = ({ trackingId }) => (
  <>
    trackingId && (
    <Helmet>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} />
      <script>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${trackingId}'); `}
      </script>
    </Helmet>
    )
  </>
);

GoogleAnalytics.propTypes = {
  trackingId: PropType.string,
};

GoogleAnalytics.defaultProps = {
  trackingId: null,
};

export default GoogleAnalytics;
