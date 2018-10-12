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
  <Card
    {...props}
    as="article"
    css={{ maxWidth: "48rem" }}
    borderRadius={["none", "none", "rounded"]}
    boxShadow={["none", "none", "small"]}
    p={[0, 0, 3]}
    mx={[0, 0, "auto"]}
  >
    <Link as={link} color="text" css={{ display: "block" }} href={href}>
      <Flex flexDirection={["column", "row"]}>
        <Box order={[1, 2]} width={[1, 1 / 3]} mb={[2, 0]}>
          {image()}
        </Box>
        <Box order={[2, 1]} width={[1, 2 / 3]} mr={[0, 3]}>
          <Heading fontFamily="sans" fontSize={4} lineHeight="title" mb={3}>
            {title}
          </Heading>
          <Text
            as="p"
            fontFamily="serif"
            fontSize={[1, 2]}
            lineHeight="copy"
            mt={0}
            mb={3}
          >
            {lead}
          </Text>
          <Text fontFamily="sans" fontSize={1} lineHeight="copy">
            {author}
          </Text>
          <Text as="time" fontFamily="sans" fontSize={1} lineHeight="copy">
            {date}
          </Text>
        </Box>
      </Flex>
    </Link>
  </Card>
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
