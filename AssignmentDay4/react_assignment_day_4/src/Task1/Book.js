import { useState } from "react";
import React from 'react';
import Container from 'react-bootstrap/Container';
import BookUI from "./BookUI";

const Book = () => {
  const [books, setBooks] = useState([{ title: 'Angels and Demons', publisher: 'Penguin Random House', author: 'Dan Brown', price: 409, prodId: 2012 }
    , { title: 'Who will Cry When you Die', publisher: 'RedBook Publications', author: 'Robin Sharma', price: 699, prodId: 2015 }]);

    const bookData = books.map((books)=>{
      return <BookUI book = {books}/>
    })
  return (
    <div>
      <h2 style={{color:'#03a5fc','text-align':'center'}}>Featured Titles</h2>
      <Container className="d-flex" style={{display: 'fluid', width: '60%',    'justify-content':'center',    margin:'0 auto',border: "2px solid #525252" }}>
      <br></br>
      
        
        {bookData}
      </Container>
      
    </div>
  )
}

export default Book