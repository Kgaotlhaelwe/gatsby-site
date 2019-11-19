import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo1  from '../components/Pictures/Logo1'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = ({ siteTitle }) => (

  

  <header>
    
    <logo1/>
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
    
          <li class="nav-item pl-5  ">
          <Logo1/>
          </li>
           
          <li class="nav-item pl-5  ">
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
    <Navbar collapseOnSelect expand="lg" >
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
       
    </div>

    <link rel="stylesheet" href="http://getbootstrap.com/dist/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script src="http://getbootstrap.com/dist/js/bootstrap.min.js"></script>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
