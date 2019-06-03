import React from 'react';
import { Box, Card, Flex, Heading, Text } from 'rebass';
import { postType } from '../../types';
import SmartLink from '../SmartLink';

const PostPreview = ({ post, ...props }) => (
  <Card
    {...props}
    as="article"
    css={{ maxWidth: '48rem' }}
    borderRadius={['none', 'none', 'rounded']}
    boxShadow={['none', 'none', 'small']}
    p={[0, 0, 3]}
    mx={[0, 0, 'auto']}
  >
    <SmartLink
      color="text"
      css="
        display: block;
      "
      href={post.href}
    >
      <Flex flexDirection={['column', 'row']}>
        <Box order={[1, 2]} width={[1, 1 / 3]} mb={[2, 0]}>
          {post.renderImage()}
        </Box>
        <Box order={[2, 1]} width={[1, 2 / 3]} mr={[0, 3]}>
          <Heading fontFamily="sans" fontSize={4} lineHeight="title" mb={3}>
            {post.title}
          </Heading>
          <Text
            as="p"
            fontFamily="serif"
            fontSize={[1, 2]}
            lineHeight="copy"
            mt={0}
            mb={3}
          >
            {post.lead}
          </Text>
          <Text fontFamily="sans" fontSize={1} lineHeight="copy">
            {post.author}
          </Text>
          <Text as="time" fontFamily="sans" fontSize={1} lineHeight="copy">
            {post.date}
          </Text>
        </Box>
      </Flex>
    </SmartLink>
  </Card>
);

PostPreview.propTypes = {
  post: postType,
};

export default PostPreview;
