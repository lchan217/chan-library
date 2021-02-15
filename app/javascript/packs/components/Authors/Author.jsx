import React from 'react';
import Book from '../Books/Book'

const Author = (props) => {
  const { name, books, id } = props.author

  return (
    <>
      <tr>
        <td id={id}>{name}</td>
        <td>
          {books.map((book, index) => (
            <Book 
              key={index} 
              book={book}
              authorId={id}/>
          ))}
        </td>
      </tr>
    </>
  );
};

export default Author;
