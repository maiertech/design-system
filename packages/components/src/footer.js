import React from 'react';
import { arrayOf, node, shape, string } from 'prop-types';
import { Box, Container, Flex, Heading, Text, Link } from 'theme-ui';

const Footer = ({ title, name, links, socialIcons, ...props }) => (
  <Box
    {...props}
    as="footer"
    sx={{
      color: 'background',
      bg: 'secondary',
      // Anything below variant cannot be overriden by this variant.
      variant: 'footer',
    }}
  >
    <Container
      sx={{
        maxWidth: '64em',
        px: [2, 3, 4],
        py: [2, 3],
        // Anything below variant cannot be overriden by this variant.
        variant: 'footer.container',
      }}
    >
      <Link
        href="/"
        sx={{ color: 'inherit', textDecoration: 'none' }}
        aria-label="Back to homepage"
      >
        <Heading
          as="h1"
          sx={{ fontSize: 4, textAlign: 'center', mt: 0, mb: 3 }}
        >
          {title}
        </Heading>
      </Link>
      <Flex sx={{ justifyContent: 'center', flexWrap: 'wrap', mb: 3 }}>
        {links.map(({ href, text }) => (
          <Link
            key={href}
            href={href}
            sx={{ color: 'inherit', textDecoration: 'none', px: 2 }}
          >
            <Text as="span" sx={{ fontSize: 2 }}>
              {text}
            </Text>
          </Link>
        ))}
      </Flex>
      {socialIcons}
      <Text as="div" sx={{ fontSize: 1, textAlign: 'center' }}>
        © {new Date().getFullYear()} by {name}
      </Text>
    </Container>
  </Box>
);

Footer.propTypes = {
  title: string.isRequired,
  name: string.isRequired,
  socialIcons: node,
  links: arrayOf(
    shape({
      href: string.isRequired,
      text: string.isRequired,
    })
  ).isRequired,
};

export default Footer;
