import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const WebsiteImages = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "template_vs_custom_site_graphic-01.png" }) {
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
  
  export default   WebsiteImages