import React from 'react';
import BookAuthor from './BookAuthor'

const Book = (props) => {
  const { title, authors, id } = props.book
  return (
    <>
      <tr>
        <td className="row-with-hover" id={id}>{title}</td>
        <td>
          {authors.map((author, index) => (
            <BookAuthor 
              key={index} 
              author={author}
              bookId={id}/>
          ))}
        </td>
      </tr>
    </>
  );
};

export default Book;