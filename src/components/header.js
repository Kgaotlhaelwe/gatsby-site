import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (

  

  <header>
    
    <div class="d-none d-md-block  d-lg-block  d-xl-block d-sm-none">
      <nav class="navbar navbar-light navbar-expand-md  justify-content-center">

        <div class="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
          <ul class="navbar-nav mx-auto text-center">
            <li class="nav-item active  pl-5 ">
              <strong><a class="nav-link " href="#">Home <span class="sr-only">Home</span></a></strong>
            </li>
            <li class="nav-item pl-5  ">
            <strong><a class="nav-link" href="//codeply.com">Products</a></strong>
          </li>

          <li class="nav-item  pl-5">
            <strong><a class="nav-link" href="//codeply.com">Blog</a></strong>
          </li>

          <li class="nav-item  pl-5">
            <strong> <a class="nav-link" href="//codeply.com">Contacts</a></strong>
          </li>
          </ul>
        </div>
      </nav>

    </div>


    <div class=" d-flex d-md-none  d-lg-none  d-xl-none d-sm-block  ">
    <nav class="navbar navbar-expand-lg navbar-light "> 
    <button onclock="openAndClose()" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>

      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Products</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
         </ul>
      </div>
    </nav>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
