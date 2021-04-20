import React from 'react';
import '../assets/css/header.css';
import { Nav,  Navbar, Button, ListGroup, Form, InputGroup, FormControl, Container } from 'react-bootstrap';
import Companylogo from '../assets/img/logo.png';
import { HiShoppingCart } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

function AppFooter() {
  return (
    <div className="Siteheader">      
      <Navbar collapseOnSelect expand="md" variant="light">
        <Container>
         <button className="allMenu"><AiOutlineMenu /> </button> 
          <Navbar.Brand href="#home">
            <img src={Companylogo} alt="company logo"/>
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
              <Nav.Link className="cartCount">
                <HiShoppingCart /> Cart <Navbar.Text> 0 </Navbar.Text> 
              </Nav.Link>
              <Button className="signIn"> Sign In </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="subNavbar">
        <Container className="d-flex">
          <ListGroup horizontal>
            <ListGroup.Item> Top Sales </ListGroup.Item>
            <ListGroup.Item> Brand Focus </ListGroup.Item>
            <ListGroup.Item className="active"> Hi-tech </ListGroup.Item>
            <ListGroup.Item> Best Sellers </ListGroup.Item>
            <ListGroup.Item> Projects </ListGroup.Item>
            <ListGroup.Item> Support </ListGroup.Item>
          </ListGroup>
          <Form>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                <HiSearch />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="I’m looking for ..."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default AppFooter;
