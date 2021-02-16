import React from 'react';

const AuthorBook = (props) => {
  const { title } = props.book
  return (
    <>
      <li id={props.authorId}>
        {title}
      </li>
    </>
  );
};

export default AuthorBook;