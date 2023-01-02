import React, { useState } from 'react'
import { Container } from 'reactstrap'
import ChildComponent from './ChildComponent';


const ParentComponent = () => {

const [message,setMessage] = useState("This message is passed from Parent component");
  return (
    <div>
        <Container>
            <h1> Hello, this the Parent component</h1>
            <h2><ChildComponent message={message}/></h2>
        </Container>
    </div>
  )
}

export default ParentComponent