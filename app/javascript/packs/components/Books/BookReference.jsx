import React from 'react';

const BookReference = (props) => {
  return (
    <li>
      {props.reference.title}
    </li>
  );
};

export default BookReference;