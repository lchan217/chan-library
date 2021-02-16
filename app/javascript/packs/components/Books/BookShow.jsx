import React from 'react';
import BookAuthors from './BookAuthors'
import BookReferences from './BookReferences'

const BookShow = (props) => {
  const { title, reference, authors, shared_books } = props.book
  let referenceText = null

  if(reference){
    referenceText = reference.name
  } else {
    referenceText = "N/A"
  }

  let bookReferences = null
  if(reference){
    bookReferences = <BookReferences references={shared_books} />
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>
        <b>Reference: </b>
        {referenceText}
      </p>
      <BookAuthors authors={authors} />
      {bookReferences}
    </div>
  );
};

export default BookShow;