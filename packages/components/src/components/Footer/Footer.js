import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Box, Flex, Heading, Text } from 'rebass';

import Icon from '../Icon';
import SmartLink from '../SmartLink';

const Footer = ({ title, name, links, lastUpdated, ...props }) => (
  <Box {...props} as="footer" bg="inverseBackground">
    <Box
      css="
        max-width: 64rem;
      "
      mx="auto"
      p={3}
    >
      <SmartLink color="inverseText" href="/">
        <Heading
          as="h1"
          fontFamily="body"
          fontSize={4}
          lineHeight="solid"
          textAlign="center"
          mt={0}
          mb={3}
        >
          {title}
        </Heading>
      </SmartLink>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" mb={3}>
        {links.map(({ href, text }) => (
          <SmartLink color="inverseText" href={href} px={2} key={href}>
            <Text as="span" fontFamily="body" fontSize={2} lineHeight="copy">
              {text}
            </Text>
          </SmartLink>
        ))}
      </Flex>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" mb={3}>
        <Icon
          color="inverseText"
          type="github"
          username="454de6e"
          key="github"
        />
        <Icon
          color="inverseText"
          type="twitter"
          username="454de6e"
          key="twitter"
        />
      </Flex>
      {lastUpdated && (
        <Text
          color="inverseText"
          fontFamily="body"
          fontSize={0}
          textAlign="center"
          mb={3}
        >
          {`Last updated: ${lastUpdated}`}
        </Text>
      )}
      <Text
        color="inverseText"
        fontFamily="body"
        fontSize={1}
        textAlign="center"
      >
        © {new Date().getFullYear()} by {name}
      </Text>
    </Box>
  </Box>
);

Footer.propTypes = {
  name: string.isRequired,
  title: string.isRequired,
  lastUpdated: string,
  links: arrayOf(
    shape({
      href: string.isRequired,
      text: string.isRequired,
    })
  ).isRequired,
};

export default Footer;
