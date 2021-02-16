import React from 'react';
import Book from './Book'

const BookIndex = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author(s)</th>
          </tr>
        </thead>
        <tbody>
          {props.books.map((book, index) => (
            <Book 
              key={index} 
              book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookIndex;