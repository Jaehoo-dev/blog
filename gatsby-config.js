module.exports = {
  siteMetadata: {
    title: "blog",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "cseAooeR0ulE7qpCcHbpZFgtyf0lrcTVvbRPMiZrr9o",
        spaceId: "s2lovf66ym15",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
