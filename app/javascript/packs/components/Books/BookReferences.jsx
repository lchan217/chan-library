import React from 'react';
import BookReference from './BookReference'

const BookReferences = (props) => {
  return (
    <div>
      <b>Linked Titles</b>
      {props.references.map((reference, index) => (
        <BookReference key={index} reference={reference} />
      ))}
    </div>
  );
};

export default BookReferences;