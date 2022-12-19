import Card from 'react-bootstrap/Card';
import React from 'react'

const BookUI = (props) => {
    return (
        <div>
            <Card style={{
                width: '425px',height:'auto',padding:'20px', 'box-shadow': "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                'text-align': " center", margin:'20px 20px 20px 20px'
            }}>
                <Card.Body>
                    <Card.Title><h3>{props.book.title}</h3></Card.Title>
                    <Card.Text>
                        <span> Author : <b>{props.book.author}</b></span><br />
                        <span> Publisher : <b>{props.book.publisher}</b></span><br />
                        <span> Price : <b>{props.book.price}</b></span><br></br><br />
                        <span> Product Id : {props.book.prodId}</span>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default BookUI
