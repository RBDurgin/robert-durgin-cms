import React from 'react';
import PropType from 'prop-types';
import { Helmet } from 'react-helmet';

const GoogleAdSense = ({ adSenseClient }) => (
  <>
    {adSenseClient && (
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <script type="text/javascript">
          {`(adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: '${adSenseClient}',
            enable_page_level_ads: true
        });`}
        </script>
      </Helmet>
    )}
  </>
);

GoogleAdSense.propTypes = {
  adSenseClient: PropType.string,
};

GoogleAdSense.defaultProps = {
  adSenseClient: null,
};

export default GoogleAdSense;
