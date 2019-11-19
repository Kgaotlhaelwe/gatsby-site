import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const EmailMarketingImages = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "BLOG_emailmarketing-ALTERACAO-1-670x419.png" }) {
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
  
  export default  EmailMarketingImages