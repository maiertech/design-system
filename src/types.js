import { func, shape, string } from 'prop-types';

export const postType = shape({
  title: string.isRequired,
  date: string.isRequired,
  author: string.isRequired,
  lead: string.isRequired,
  renderImage: func.isRequired,
  href: string.isRequired,
  link: func,
});

export const themeType = shape({
  internalLink: func,
  externalLink: func,
});
