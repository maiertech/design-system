import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Box, Flex, Heading, Text } from 'rebass';
import SmartLink from '../SmartLink';

const Header = ({ title, links, ...props }) => (
  <Box {...props} bg="brandedBackground">
    <Box
      css="
        max-width: 96rem;
      "
      mx="auto"
      p={[2, 3]}
    >
      <Flex
        css="
          width: 100%;
        "
        flexDirection={['column', 'row']}
        justifyContent={['center', 'space-between']}
        alignItems="center"
      >
        <SmartLink color="brandedText" href="/">
          <Heading
            fontFamily="body"
            fontSize={[3, 4, 5]}
            lineHeight="title"
            mb={[1, 0]}
            mr={[0, 3]}
          >
            {title}
          </Heading>
        </SmartLink>
        <Flex>
          {links.map(({ href, text }) => (
            <SmartLink color="brandedText" href={href} key={href}>
              <Text
                as="span"
                fontFamily="body"
                fontSize={[1, 2, 3]}
                fontWeight="bold"
                ml={[2, 3, 4]}
                mr={[2, 0]}
              >
                {text}
              </Text>
            </SmartLink>
          ))}
        </Flex>
      </Flex>
    </Box>
  </Box>
);

Header.propTypes = {
  title: string.isRequired,
  links: arrayOf(
    shape({
      href: string.isRequired,
      text: string.isRequired,
    })
  ).isRequired,
};

export default Header;
