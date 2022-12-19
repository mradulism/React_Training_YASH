import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ShowOnClick = () => {
    const [show, setShow] = useState(false);
    return (

        <div>
            <Container className='my-3 border'>
                <Row>
                    <Col xs={2}>
                        <Button variant="success" onClick={()=>setShow(true)}>Show text</Button>{' '}
                    </Col>
                    <Col xs={2}>
                        <Button variant="danger" onClick={()=>setShow(false)}>Hide Text</Button>{' '}
                    </Col>
                </Row>
                <Row>
                    { show &&
                    <Card style={{ width: '18rem', 'margin-top':'30px'}}>
                        <Card.Body>
                            <Card.Title>Howdy REACT!</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Hello there...</Card.Subtitle>
                            <Card.Text>
                                This is REACT.js Assignment Task-2
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
}
                </Row>
            </Container>
        </div>
    )

}


export default ShowOnClick