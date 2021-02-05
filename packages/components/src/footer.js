import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Box, Container, Flex, Heading, Text, Link } from 'theme-ui';

import DevIcon from './dev-icon';
import GitHubIcon from './github-icon';
import TwitterIcon from './twitter-icon';
import SocialIcons from './social-icons';

const Footer = ({ title, name, links, lastUpdated, ...props }) => (
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
      <SocialIcons
        values={[
          {
            id: 'twitter',
            icon: (
              <Link
                href="https://twitter.com/maiertech"
                sx={{ color: 'inherit' }}
              >
                <TwitterIcon title="Follow me on Twitter" />
              </Link>
            ),
          },
          {
            id: 'dev',
            icon: (
              <Link href="https://dev.to/maiertech" sx={{ color: 'inherit' }}>
                <DevIcon title="Follow me on DEV" />
              </Link>
            ),
          },
          {
            id: 'github',
            icon: (
              <Link
                href="https://github.com/maiertech"
                sx={{ color: 'inherit' }}
              >
                <GitHubIcon title="Follow me on GitHub" />
              </Link>
            ),
          },
        ]}
        align="center"
        m={2}
      />
      {lastUpdated && (
        <Text as="div" sx={{ fontSize: 0, textAlign: 'center', mb: 3 }}>
          {`Last updated: ${lastUpdated}`}
        </Text>
      )}
      <Text as="div" sx={{ fontSize: 1, textAlign: 'center' }}>
        © {new Date().getFullYear()} by {name}
      </Text>
    </Container>
  </Box>
);

Footer.propTypes = {
  title: string.isRequired,
  name: string.isRequired,
  lastUpdated: string,
  links: arrayOf(
    shape({
      href: string.isRequired,
      text: string.isRequired,
    })
  ).isRequired,
};

export default Footer;
