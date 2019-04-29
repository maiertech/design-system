import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import Helmet from 'react-helmet';

const Page = ({ title, description, children }) => (
  <Box mb={[2, 3]}>
    <Helmet>
      <meta property="og:description" content={description} v />
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Page;
