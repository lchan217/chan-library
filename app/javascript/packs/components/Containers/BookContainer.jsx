import React, { useState, useEffect } from 'react';
import BookShow from '../Books/BookShow'
import BookIndex from '../Books/BookIndex'

const BookContainer = () => {
  const [ books, setBooks ] = useState([])
  const [ bookShowPage, setBookShowPage ] = useState(false)
  const [ book, setBook ] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/api/v1/books")
    .then(response => response.json())
    .then(response => {
      setBooks(response)
    })
    .catch(error => console.log(error))
  }, [])

  const handleClick = (event) => {
    const id = event.target.id
    fetch(`http://localhost:3000/api/v1/books/${id}`)
    .then(response => response.json())
    .then(response => {
      setBook(response)
      setBookShowPage(true)
    })
    .catch(error => console.log(error))
  }

  const goBack = () => {
    setBookShowPage(false)
  }

  let bookData = null

  if(bookShowPage){
    bookData = (
      <div>
        <button onClick={goBack}>Go Back</button>
        <BookShow book={book}/>
      </div>
    )
  } else {
    bookData = (
      <div onClick={handleClick}>
        <BookIndex books={books} />
      </div>
    )
  }

    return (
      <div>
        <h1>Books</h1>
        <h6>Pick a row to see the authors and shared references</h6>
        {bookData}
      </div>
    );
 
}

export default BookContainer;