import React from 'react';
import { node } from 'prop-types';
import { Box, ThemeProvider } from 'theme-ui';
import { theme } from '@maiertech/components';

const LivePreviewWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Box sx={{ m: 2 }}>{children}</Box>
  </ThemeProvider>
);

LivePreviewWrapper.propTypes = {
  children: node.isRequired,
};

export default LivePreviewWrapper;
