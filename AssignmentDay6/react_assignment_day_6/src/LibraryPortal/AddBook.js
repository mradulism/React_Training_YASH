import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { FormGroup, Label, Input, Button } from 'reactstrap';
const AddBook = () => {

    const [book, setBook] = useState({ title: '', Author: '', genre: '', summary: '' });

    const changeHandler = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
        console.log(book);
    }
    
    const saveData = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:5000/books', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle data
                
            })
            .catch((err) => {
                console.log(err.message);
            });
    }


    return (
        <div>
            <Container>
                <Form onSubmit={saveData}>
                    <Form.Group className="mb-3" controlId="bookTitle">
                        <Form.Label>Title :</Form.Label>
                        <Form.Control type="text" name='title' value={book.title} placeholder="Enter Book Title" onChange={changeHandler} />
                    </Form.Group>
                    <hr />
                    <Form.Group className="mb-3" controlId="bookAuthor">
                        <Form.Label>Author :</Form.Label>
                        <Form.Control type="text" name='Author' value={book.Author} placeholder="Enter Book Author" onChange={changeHandler} />
                    </Form.Group>
                    <hr />
                    <FormGroup>
                        <Label for="bookGenre">Genre :</Label>
                        <Form.Select name="genre" value={book.genre} onChange={changeHandler} >
                            <option value="">Select</option>
                            <option value="romance">Romance</option>
                            <option value="crime">Crime</option>
                            <option value="thriller">Thriller</option>
                            <option value="horror"> Horror</option>
                        </Form.Select>
                    </FormGroup>
                    <hr />
                    <Form.Group className="mb-3" controlId="bookSummary">
                        <Form.Label>Summary : </Form.Label>
                        <Form.Control as="textarea" name='summary' value={book.summary} rows={3} placeholder="Enter Book Summary" onChange={changeHandler} />
                    </Form.Group>
                    <hr />
                    <Button className='' color='success' type='submit'>Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default AddBook