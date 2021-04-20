import React from 'react';
import '../assets/css/header.css';
import '../assets/css/footer.css'
import { Nav,  Navbar, Container } from 'react-bootstrap';
import Companylogo from '../assets/img/white-logo.png';
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

function AppHeader() {
  return (
    <div className="Siteheader siteFooter">      
      <Navbar collapseOnSelect expand="md" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Companylogo} alt="company logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Devices</Nav.Link>
              <Nav.Link href="#pricing">Delivery & Payment</Nav.Link>
              <Nav.Link href="#pricing">Guarantee</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <FaTwitter />  
              </Nav.Link>
              <Nav.Link>
                <FaFacebookF />  
              </Nav.Link>
              <Nav.Link>
                <FaGoogle />  
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div class="termsBox">
        <Container>
          <p> She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday.</p>
          <p className="ml-auto mr-0"> Privacy Policy </p>
          <p className="ml-3"> Terms and Conditions </p>
        </Container>
      </div>
    </div>
  );
}

export default AppHeader;
