import React from 'react';

const BookAuthor = (props) => {
  const { name } = props.author

  return (
    <>
    <li id={props.bookId}>
      {name}
    </li>
    </>
  );
};

export default BookAuthor;