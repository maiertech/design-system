import React from 'react';
import {
  Footer,
  GitHubIcon,
  SocialIcons,
  TwitterIcon,
} from '@maiertech/components';
import { Link, ThemeProvider } from 'theme-ui';
import preset from '@maiertech/preset';

const VisualRegressionTest = () => (
  <ThemeProvider theme={preset}>
    <Footer
      title="This is the Footer title"
      name="Thilo Maier"
      links={[
        {
          href: '/blog',
          text: 'Blog',
        },
        {
          href: '/about',
          text: 'About',
        },
        {
          href: '/archive',
          text: 'Archive',
        },
      ]}
      socialIcons={
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
      }
    />
  </ThemeProvider>
);

export default VisualRegressionTest;
