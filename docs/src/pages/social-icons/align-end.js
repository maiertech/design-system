import React from 'react';
import { Link, ThemeProvider } from 'theme-ui';
import preset from '@maiertech/preset';
import {
  DevIcon,
  GitHubIcon,
  SocialIcons,
  TwitterIcon,
} from '@maiertech/components';

const VisualRegressionTest = () => (
  <ThemeProvider theme={preset}>
    <SocialIcons
      values={[
        {
          id: 'dev',
          icon: (
            <Link href="https://dev.to/maiertech" sx={{ color: 'inherit' }}>
              <DevIcon size={48} title="Follow me on DEV" />
            </Link>
          ),
        },
        {
          id: 'twitter',
          icon: (
            <Link
              href="https://twitter.com/maiertech"
              sx={{ color: 'inherit' }}
            >
              <TwitterIcon size={48} title="Follow me on Twitter" />
            </Link>
          ),
        },
        {
          id: 'github',
          icon: (
            <Link href="https://github.com/maiertech" sx={{ color: 'inherit' }}>
              <GitHubIcon size={48} title="Follow me on GitHub" />
            </Link>
          ),
        },
      ]}
      align="end"
      m={2}
    />
  </ThemeProvider>
);

export default VisualRegressionTest;
