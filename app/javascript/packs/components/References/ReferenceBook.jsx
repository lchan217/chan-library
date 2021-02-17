import React from 'react';

const ReferenceBook = (props) => {
  return (
    <div>
      <ul>
        {props.books.map( (book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReferenceBook;