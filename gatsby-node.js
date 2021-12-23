const path = require('path')
exports.createPages = async({graphql,actions}) => {
    const {data} = await graphql(`
        {
            allContentfulPost {
                nodes { 
                   slug
                }
            }
        }
    `) 
    data.allContentfulPost.nodes.forEach(post => {
        actions.createPage({
            path: post.slug,
            component: path.resolve('./src/template/post-contentful.js'),
            context:{
                slug: post.slug
            }
        })
    }) 
}  