import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap';
import SingleCard from './SingleCard';

const ViewAllBooks = () => {

  const [bookList, setBookList] = useState([]);
  
  const fetchBooks = async () => {
    const data = await fetch('http://localhost:5000/books');
    const response = await data.json();
    setBookList(response);

  }
  useEffect(() => {
    fetchBooks()
  },[])

 
  

  return (
    <div>
      <Container className="d-flex wrap">
        {bookList.map((book) => {
          return <SingleCard book ={book}/>
        })}
      </Container>
    </div>
  )
}

export default ViewAllBooks