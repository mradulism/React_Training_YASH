import React from 'react'
import { Container } from 'react-bootstrap';

const Footer = () => {
  const style={
    position:'fixed',
    left:'0',
    bottom:'0',
    width:'100%',
    backgroundColor:'black',
    color:'blue'
  }  
  return (
    <Container>
    <footer className='footer' style={style}>
        <div className='container'>
           <span className='text-white'>Defect Tracker Application @ Mradul Jain  © All Rights Reserved YASH Technologies Pvt. Ltd.</span>
        </div>
    </footer>
    </Container>
  )
}

export default Footer;