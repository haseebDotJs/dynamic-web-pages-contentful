/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// const dotenv = require('dotenv')

// if(process.env.NODE_ENV !== 'production'){
//   dotenv.config()
// }
module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,

     {
       resolve: `gatsby-source-contentful`,
       options: {
         spaceId: 'l1n3fha347bn',
         accessToken: 'SNYTNQK-xofvWzmeFi2xV7dqLlYlXRL1NH-Bj8lsLKE'
       }
     }
  ],
}
