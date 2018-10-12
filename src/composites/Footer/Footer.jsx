import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Heading, Link, Text } from "rebass";
import Icon from "../../primitives/Icon";

const Footer = ({
  title,
  name,
  links,
  extLink,
  intLink,
  lastUpdated,
  ...props
}) => (
  <Box {...props} as="footer" bg="inverseBackground">
    <Box css={{ maxWidth: "64rem" }} mx="auto" p={3}>
      <Link as={intLink} color="inverseText" href="/">
        <Heading
          as="h1"
          fontFamily="sans"
          fontSize={4}
          lineHeight="solid"
          textAlign="center"
          mt={0}
          mb={3}
        >
          {title}
        </Heading>
      </Link>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" mb={3}>
        {links.map(({ href, text }) => (
          <Link as={intLink} color="inverseText" href={href} px={2} key={href}>
            <Text as="span" fontFamily="sans" fontSize={2} lineHeight="copy">
              {text}
            </Text>
          </Link>
        ))}
      </Flex>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" mb={3}>
        <Icon
          color="inverseText"
          link={extLink}
          type="github"
          username="mdotasia"
          key="github"
        />
        <Icon
          color="inverseText"
          link={extLink}
          type="twitter"
          username="mdotasia"
          key="twitter"
        />
      </Flex>
      {lastUpdated && (
        <Text
          color="inverseText"
          fontFamily="sans"
          fontSize={0}
          textAlign="center"
          mb={3}
        >
          {`Last updated: ${lastUpdated}`}
        </Text>
      )}
      <Text
        color="inverseText"
        fontFamily="sans"
        fontSize={1}
        textAlign="center"
      >
        © {new Date().getFullYear()} by {name}
      </Text>
    </Box>
  </Box>
);

Footer.propTypes = {
  extLink: PropTypes.func,
  intLink: PropTypes.func,
  lastUpdated: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Copyright name. */
  name: PropTypes.string.isRequired,
  /** Footer title. */
  title: PropTypes.string.isRequired
};

Footer.defaultProps = {
  extLink: undefined,
  intLink: undefined,
  lastUpdated: ""
};

export default Footer;
