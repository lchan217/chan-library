import React from 'react';
import Book from '../Books/Book'

const AuthorShow = (props) => {
  const { name, books } = props.author
  return (
    <div>
      {name}
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </div>
  );
};

export default AuthorShow;