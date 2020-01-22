module.exports = {
  siteMetadata: {
    title: "From Way Downtown",
    description: "Basketball scores"
  },
  plugins: [
    // You can should only have one instance of this plugin
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: `https://dreamy-lichterman-3b5b48.netlify.com/` // required!
      }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/style/theme.ts`).lightTheme,
        dark: require(`${__dirname}/src/style/theme.ts`).darkTheme
      }
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"] // applies purging only on the bulma css file
      }
    }, // must be after other CSS plugins
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          importWorkboxFrom: `cdn`,
          runtimeCaching: [
            {
              // Use cacheFirst since these don't need to be revalidated (same RegExp
              // and same reason as above)
              urlPattern: /(\.js$|\.css$|static\/)/,
              handler: `cacheFirst`
            },
            {
              // page-data.json files are not content hashed
              urlPattern: /^https?:.*data.nba.net.*.json/,
              handler: `networkFirst`
            },
            {
              // page-data.json files are not content hashed
              urlPattern: /\.netlify\/functions.*/,
              handler: `staleWhileRevalidate`
            },
            {
              // Add runtime caching of various other page resources
              urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: `staleWhileRevalidate`
            },
            {
              // Google Fonts CSS (doesn't end in .css so we need to specify it)
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: `staleWhileRevalidate`
            }
          ]
        }
      }
    },
    "gatsby-plugin-netlify" // make sure to keep it last in the array,
  ]
};
