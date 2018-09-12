import React from "react";
import PropTypes from "prop-types";
import { Box, Card, Flex, Heading, Link, Text } from "rebass";

const PostPreview = ({
  title,
  author,
  date,
  lead,
  href,
  image,
  link,
  ...props
}) => (
  <Link as={link} css={{ display: "block" }} href={href} {...props}>
    <Card
      as="article"
      css={{ maxWidth: "48rem" }}
      borderRadius={["none", "none", "rounded"]}
      boxShadow={["none", "none", "0 2px 16px rgba(0, 0, 0, 0.25)"]}
      p={[0, 0, 3]}
      mx={[0, 0, "auto"]}
    >
      <Flex flexDirection={["column", "row"]}>
        <Box width={[1, 1 / 3]} mr={[0, 3]} mb={[2, 0]}>
          {image()}
        </Box>
        <Box width={[1, 2 / 3]}>
          <Heading fontFamily="sans" fontSize={3} lineHeight="title" mb={3}>
            {title}
          </Heading>
          <Text
            as="p"
            fontFamily="serif"
            fontSize={[6, 5]}
            lineHeight="copy"
            mt={0}
            mb={3}
          >
            {lead}
          </Text>
          <Text fontFamily="sans" fontSize={6} lineHeight="copy">
            {author}
          </Text>
          <Text as="time" fontFamily="sans" fontSize={6} lineHeight="copy">
            {date}
          </Text>
        </Box>
      </Flex>
    </Card>
  </Link>
);

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.func.isRequired,
  link: PropTypes.func
};

PostPreview.defaultProps = {
  link: undefined
};

export default PostPreview;
