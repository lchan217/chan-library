import React from 'react';
import Author from './Author'

const AuthorIndex = (props) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Book(s)</th>
          </tr>
        </thead>
        <tbody>
          {props.authors.map((author, index) => (
            <Author 
              key={index} 
              author={author} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorIndex;