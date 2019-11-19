/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import FirstSection from './FirstLayout'
import  ClientsLogoSections from './ClientsLogoSection'
import  ServicesSection from "./ServicesSection" ;

import "./layout.css"
// Hook (use-require-auth.js)
import { useEffect } from "react";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
 useEffect(() => {
   
    // load the two JS libraries into `body`
    // loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', { inBody: true });
    // loadScript('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', { inBody: true });
  })
  return (
    <>
     
      <Header siteTitle={data.site.siteMetadata.title} />


      <FirstSection />
      <ClientsLogoSections/>
      < ServicesSection/>
        <main>{children}</main>
        <footer class="mt-5 pt-2" style={{backgroundColor:"#3fc5f0" , height:'50px' , color:'white'}}>
        <div class="container">
          <span>All rights reserved</span>
        </div>
        </footer>
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
