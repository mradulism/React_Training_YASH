import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Library Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="addBook">Add Books</Nav.Link>
            <Nav.Link href="viewAllBooks">View All Books</Nav.Link>
            <Nav.Link href="contactUs">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header