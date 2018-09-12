import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

const Head = ({ title, description, noRobots, url }) => (
  <Helmet title={title}>
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    {url && <meta property="og:url" content={url} />}
    <meta property="og:description" content={description} />
    {noRobots && <meta name="robots" content="noindex,nofollow" />}
  </Helmet>
);

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  noRobots: PropTypes.bool,
  url: PropTypes.string
};

Head.defaultProps = {
  noRobots: false,
  url: ""
};

export default Head;
