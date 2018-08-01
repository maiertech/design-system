import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Container from "../../components/Container";
import Heading from "../../components/Heading";

const Page = ({ children, description, title }) => (
  <Container maxWidth={7} mt={[3, 4]} mb={[3, 4]}>
    <Helmet title={title} />
    <Heading lineHeight="solid" mb={[3, 4]}>
      {title}
    </Heading>
    {children}
  </Container>
);

Page.propTypes = {
  title: PropTypes.string.isRequired
};

export default Page;
