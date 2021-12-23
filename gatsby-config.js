/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const dotenv = require('dotenv')

if(process.env.NODE_ENV !== 'production'){
  dotenv.config()
}
module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
     {
       resolve: `gatsby-source-contentful`,
       options: {
         spaceId: process.env.CONTENTFUL_SPACEID,
         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
       }
     }
  ],
}
