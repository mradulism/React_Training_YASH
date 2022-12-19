import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
const ShowDetailProduct = (props) => {
    const[visible,setVisible]=useState(false);
    const buttonText = visible ? "Hide Details" : "Show Details";
    return (
        <div>
            <Card style={{
                width: '425px', height: 'auto', padding: '20px', 'box-shadow': "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                'text-align': " center", margin: '20px 20px 20px 20px'
            }}>
                <Card.Body>
                    <Card.Title>{props.product.prodModel}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> Price : {props.product.price}</Card.Subtitle>
                    <hr></hr>
                    <Button variant="danger" onClick ={()=>setVisible(!visible)}>{buttonText}</Button>
                </Card.Body>
                
                  { visible && <Card.Body>  
                    <Card.Header>More Specs.</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Camera : {props.product.camera}</ListGroup.Item>
                        <ListGroup.Item>OS : {props.product.os}</ListGroup.Item>
                        <ListGroup.Item>Memory : {props.product.ram}</ListGroup.Item>
                        <ListGroup.Item>Processor : {props.product.processor}</ListGroup.Item>
                    </ListGroup>
                    </Card.Body>}
            </Card>

        </div>
    )
}

export default ShowDetailProduct