import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const SeoImage = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "SEO-article-header-880x470-c.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  }
  
  export default  SeoImage