import React from 'react';
import ReferenceBook from './ReferenceBook'

const Reference = (props) => {
  const { name } = props.reference

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="card-text">
            <ReferenceBook books={props.reference.books} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reference;