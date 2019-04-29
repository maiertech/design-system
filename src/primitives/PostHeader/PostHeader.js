import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from 'rebass';

const PostHeader = ({ author, date, title, ...props }) => (
  <Box {...props}>
    <Heading
      fontFamily="sans"
      fontSize={[4, 5, 6]}
      lineHeight="solid"
      mt={0}
      mb={[2, 3]}
    >
      {title}
    </Heading>
    <Text fontFamily="sans" fontSize={[0, 1, 2]} lineHeight="copy">
      {author}
    </Text>
    <Text as="time" fontFamily="sans" fontSize={[0, 1, 2]}>
      {date}
    </Text>
  </Box>
);

PostHeader.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PostHeader;
