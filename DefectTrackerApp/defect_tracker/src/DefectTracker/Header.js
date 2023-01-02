import React, { useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthenticationService from '../Service/AuthenticationService';


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [isLoggedIn,setIsLoggedIn] = useState(false) 
  const [userName,setuserName] = useState('') 
  useEffect(()=>{
    const isLoggedIn = AuthenticationService.isLoggedIn()
    setIsLoggedIn(isLoggedIn)
    let userName = sessionStorage.getItem('authenticatedUsername') 
    setuserName(userName)
    console.log({userName},"sadsddskjbfdkjdsafkdsf")
  },[location])
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="home">Defect Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            
            <Nav.Link href="addDefect">Add Defect</Nav.Link>
            <Nav.Link href="viewAllDefect">View All Defect</Nav.Link>
            <Nav.Link href="contact">Contact Us</Nav.Link>
          </Nav>
          <Nav>
          {!isLoggedIn&& <Nav.Link href="login">Login</Nav.Link>}
            {isLoggedIn && <Nav.Link onClick={()=>{AuthenticationService.logout(); navigate('/login')}}>Logout</Nav.Link>}
            <Nav.Link >{userName}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header