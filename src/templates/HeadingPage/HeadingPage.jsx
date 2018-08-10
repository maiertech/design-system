import React from "react";
import PropTypes from "prop-types";
import ContentPage from "../ContentPage";
import Heading from "../../components/Heading";

const HeadingPage = ({ children, debug, description, title }) => (
  <ContentPage debug={debug} description={description} title={title}>
    <Heading lineHeight="solid" mb={[3, 4]}>
      {title}
    </Heading>
    {children}
  </ContentPage>
);

HeadingPage.propTypes = {
  debug: PropTypes.bool,
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

HeadingPage.defaultProps = {
  debug: false
};

export default HeadingPage;
