module.exports = {
  siteMetadata: {
    title: 'MDS (@maiertech design system)',
    shortName: 'MDS',
    description: 'Design system for @maiertech websites.',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        repoRootPath: '..',
      },
    },
  ],
};
