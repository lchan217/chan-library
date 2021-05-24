import React from 'react';
import AuthorBook from './AuthorBook'

const Author = (props) => {
  const { name, books, id } = props.author

  return (
    <>
      <tr>
        <td id={id} className='row-with-hover'>{name}</td>
        <td>
          {books.map((book, index) => (
            <AuthorBook 
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
