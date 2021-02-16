import React from 'react';
import BookAuthor from './BookAuthor'

const BookAuthors = (props) => {
  return (
    <>
      <b>Authors</b>
      {props.authors.map((author, index) => (
        <BookAuthor key={index} author={author} />
      ))}
    </>
  );
};

export default BookAuthors;