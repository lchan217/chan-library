import React from 'react';
import ReferenceBook from './ReferenceBook'

const Reference = (props) => {
  const { name, id } = props.reference

  function deleteReference(id) {
    fetch(`http://localhost:3000/api/v1/references/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="card-text">
            <ReferenceBook books={props.reference.books} />
            <button onClick={() => deleteReference(id)}>Delete Reference</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reference;