import {} from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { isDarkishTheme } from '../../helpers/utils';

const HeadTagEditor = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta
          httpEquiv="Permissions-Policy"
          content="interest-cohort=()"
        ></meta>
      </Helmet>
    </>
  );
};

export default HeadTagEditor;
