import React from 'react';
import AuthorBook from './AuthorBook'

const AuthorShow = (props) => {
  const { name, books } = props.author
  return (
    <div>
      <h3>{name}</h3>
      {books.map((book, index) => (
        <AuthorBook key={index} book={book} />
      ))}
    </div>
  );
};

export default AuthorShow;