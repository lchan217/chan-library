import React from 'react';

const Book = (props) => {
  const { title } = props.book
  return (
    <>
      <li>
        {title}
      </li>
    </>
  );
};

export default Book;