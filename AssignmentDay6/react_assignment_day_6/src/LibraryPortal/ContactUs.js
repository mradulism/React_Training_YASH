import React from 'react'
import { Container } from 'react-bootstrap'

const ContactUs = () => {
  return (
    <div>
        <Container>
            <h2 style={{"color":"#42b6f5"}}>Get in touch with us</h2>
            <br></br>
            <br></br>
            <h3>We're open from 9:00 AM to 9:00 PM all 7 Days!</h3>
            <br></br>
            <br></br>
            <h4>Or Contact Us at : </h4>
            <ul>
                <li>Email : abclibrary@gmail.com</li>
                <li>Patron help: +91 888 445 9981</li>
            </ul>
        </Container>
    </div>
  )
}

export default ContactUs