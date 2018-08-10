import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Container from "../../components/Container";

const ContentPage = ({ children, debug, description, title }) => (
  <Container debug={debug} maxWidth={7} mt={[3, 4]} mb={[3, 4]}>
    <Helmet>
      <meta property="og:description" content={description} v />
      <title>{title}</title>
    </Helmet>
    {children}
  </Container>
);

ContentPage.propTypes = {
  children: PropTypes.node.isRequired,
  debug: PropTypes.bool,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

ContentPage.defaultProps = {
  debug: false
};

export default ContentPage;
