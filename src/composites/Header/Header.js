import React from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import { Box, Flex, Heading, Link, Text } from 'rebass';

const Header = ({ title, links, link, ...props }) => (
  <Box {...props} bg="brandedBackground">
    <Box css={{ maxWidth: '96rem' }} mx="auto" p={[2, 3]}>
      <Flex
        css={{ width: '100%' }}
        flexDirection={['column', 'row']}
        justifyContent={['center', 'space-between']}
        alignItems="center"
      >
        <Link as={link} color="brandedText" href="/">
          <Heading
            fontFamily="sans"
            fontSize={[3, 4, 5]}
            lineHeight="title"
            mb={[1, 0]}
            mr={[0, 3]}
          >
            {title}
          </Heading>
        </Link>
        <Flex>
          {links.map(({ href, text }) => (
            <Link as={link} color="brandedText" href={href} key={href}>
              <Text
                as="span"
                fontFamily="sans"
                fontSize={[1, 2, 3]}
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
  title: string.isRequired,
  link: func,
  links: arrayOf(
    shape({
      href: string.isRequired,
      text: string.isRequired,
    })
  ).isRequired,
};

export default Header;
