import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const VideoMarketingImage  = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "social-media-video.jpg" }) {
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
  
  export default VideoMarketingImage