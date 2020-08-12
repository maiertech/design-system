import React from 'react';
import { Link, ThemeProvider } from 'theme-ui';
import { GitHubIcon, SocialIcons, TwitterIcon } from '@maiertech/components';
import preset from '@maiertech/preset';

const VisualRegressionTest = () => (
  <ThemeProvider theme={preset}>
    <SocialIcons
      values={[
        {
          id: 'github',
          icon: (
            <Link href="https://github.com/454de6e" sx={{ color: 'inherit' }}>
              <GitHubIcon size={48} title="Follow us on GitHub" />
            </Link>
          ),
        },
        {
          id: 'twitter',
          icon: (
            <Link href="https://twitter.com/454de6e" sx={{ color: 'inherit' }}>
              <TwitterIcon size={48} title="Follow us on Twitter" />
            </Link>
          ),
        },
      ]}
      align="center"
      m={2}
    />
  </ThemeProvider>
);

export default VisualRegressionTest;
