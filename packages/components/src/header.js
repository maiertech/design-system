import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Box, Container, Flex, Heading, Link } from 'theme-ui';

const Header = ({ title, links, ...props }) => (
  <Box
    {...props}
    sx={{
      color: 'background',
      bg: 'primary',
      // Anything below variant cannot be overriden by this variant.
      variant: 'header',
    }}
  >
    <Container
      sx={{
        maxWidth: '96em',
        px: [2, 3, 4],
        py: [2, 3],
        // Anything below variant cannot be overridden by this variant.
        variant: 'header.container',
      }}
    >
      <Flex
        as="header"
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link
          href="/"
          aria-label="Back to homepage"
          sx={{
            flex: 'none',
            color: 'inherit',
            textDecoration: 'none',
            mb: 2,
          }}
        >
          <Heading as="div" sx={{ fontSize: [4, 5, 6], whiteSpace: 'nowrap' }}>
            {title}
          </Heading>
        </Link>
        <Flex
          as="nav"
          sx={{
            flex: 1,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {links.map(({ href, text }) => (
            <Link
              key={text}
              href={href}
              sx={{
                flex: 'none',
                color: 'inherit',
                textDecoration: 'none',
                my: [1, 2],
                mx: [2, 3],
              }}
            >
              <Heading
                as="div"
                sx={{
                  fontSize: [2, 3, 4],
                }}
              >
                {text}
              </Heading>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Container>
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
