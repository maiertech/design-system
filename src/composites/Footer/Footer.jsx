import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Heading, Link, Text } from "rebass";
import Icon from "../../primitives/Icon";

const Footer = ({ title, name, links, extLink, intLink, lastUpdated }) => (
  <Box as="footer" color="inverseText" bg="inverseBackground">
    <Box css={{ maxWidth: "64rem" }} mx="auto" p={3}>
      <Link as={intLink} href="/">
        <Heading
          as="h1"
          fontFamily="sans"
          fontSize={3}
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
          <Link as={intLink} href={href} px={2} key={href}>
            <Text as="span" fontFamily="sans" fontSize={5} lineHeight="copy">
              {text}
            </Text>
          </Link>
        ))}
      </Flex>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" mb={3}>
        <Icon
          link={extLink}
          type="github"
          username="mdotasia"
          key="github-mdotasia"
        />
        <Icon
          link={extLink}
          type="twitter"
          username="mdotasia"
          key="twitter-mdotasia"
        />
      </Flex>
      {lastUpdated && (
        <Text fontFamily="sans" fontSize={7} textAlign="center" mb={3}>
          {`Last updated: ${lastUpdated}`}
        </Text>
      )}
      <Text fontFamily="sans" fontSize={6} textAlign="center">
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
