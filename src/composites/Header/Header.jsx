import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Heading, Link, Text } from "rebass";

const Header = ({ title, links, link }) => (
  <Box color="brandedText" bg="brandedBackground">
    <Box css={{ maxWidth: "96rem" }} mx="auto" p={[2, 3]}>
      <Flex
        css={{ width: "100%" }}
        flexDirection={["column", "row"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
      >
        <Link as={link} href="/">
          <Heading
            fontFamily="sans"
            fontSize={[4, 3, 2]}
            lineHeight="title"
            mb={[1, 0]}
            mr={[0, 3]}
          >
            {title}
          </Heading>
        </Link>
        <Flex>
          {links.map(({ href, text }) => (
            <Link as={link} href={href} key={href}>
              <Text
                as="span"
                fontFamily="sans"
                fontSize={[6, 5, 4]}
                fontWeight="bold"
                ml={[2, 3, 4]}
                mr={[2, 0]}
              >
                {text}
              </Text>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  </Box>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.func,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

Header.defaultProps = {
  link: undefined
};

export default Header;
