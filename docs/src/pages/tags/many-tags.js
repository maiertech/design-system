import React from 'react';
import { ThemeProvider } from 'theme-ui';
import preset from '@maiertech/preset';
import { Tags } from '@maiertech/components';

const ManyTags = () => (
  <ThemeProvider theme={preset}>
    <Tags
      values={[
        { tag: 'bash', path: '/tags/bash/' },
        { tag: 'codesandbox', path: '/tags/codesandbox/' },
        { tag: 'css', path: '/tags/css/' },
        { tag: 'design-systems', path: '/tags/design-systems/' },
        { tag: 'devtools', path: '/tags/devtools/' },
        { tag: 'digital-garden', path: '/tags/digital-garden/' },
        { tag: 'gatsby', path: '/tags/gatsby/' },
        { tag: 'github', path: '/tags/github/' },
        { tag: 'graphql', path: '/tags/graphql/' },
        { tag: 'macos', path: '/tags/macos/' },
        { tag: 'mdx', path: '/tags/mdx/' },
        { tag: 'nextjs', path: '/tags/nextjs/' },
        { tag: 'node', path: '/tags/node/' },
        { tag: 'react', path: '/tags/react/' },
        { tag: 'postcss', path: '/tags/postcss/' },
        { tag: 'screenflow', path: '/tags/screenflow/' },
        { tag: 'serverless', path: '/tags/serverless/' },
        { tag: 'tailwind', path: '/tags/tailwind/' },
        { tag: 'theme-ui', path: '/tags/theme-ui/' },
        { tag: 'vercel', path: '/tags/vercel/' },
        { tag: 'vscode', path: '/tags/vscode/' },
      ]}
      variant="tags.secondary"
      m={2}
    />
  </ThemeProvider>
);

export default ManyTags;
