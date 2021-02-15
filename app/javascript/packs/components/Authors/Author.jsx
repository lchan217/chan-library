import React, { useState } from 'react';
import Book from '../Books/Book'

const Author = (props) => {
  const { name, books, id } = props.author

  return (
    <>
      <tr id={id}>
        <td>{name}</td>
        <td>
          {books.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </td>
      </tr>
    </>
  );
};

export default Author;
