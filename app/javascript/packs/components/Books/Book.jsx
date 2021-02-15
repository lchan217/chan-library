import React from 'react';

const Book = (props) => {
  const { title } = props.book
  return (
    <>
      <li id={props.authorId}>
        {title}
      </li>
    </>
  );
};

export default Book;