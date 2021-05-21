import React, { useState, useEffect } from 'react';
import ReferenceBook from './ReferenceBook'
import ReferenceForm from './ReferenceForm'

const Reference = (props) => {
  const { name, id } = props.reference
  const [showEditForm, setShowEditForm] = useState(false)
  const [reference, setReference] = useState({})
  const [books, setBooks] = useState()

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/books")
    .then(response => response.json())
    .then(response => {
      setBooks(response)
    })
    .catch(error => console.log(error))
  }, [])

  const deleteReference = id => {
    fetch(`http://localhost:3000/api/v1/references/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    window.location.reload();
  }

  const editReference = id => {
    fetch(`http://localhost:3000/api/v1/references/${id}`)
    .then(response => response.json())
    .then(responseData => {
        setReference(responseData)
    })
    setShowEditForm(true)
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="card-text">
            <ReferenceBook books={props.reference.books} />
            <button onClick={() => editReference(id)}>Edit Reference</button>
            <button onClick={() => deleteReference(id)}>Delete Reference</button>

            {showEditForm && <ReferenceForm books={props.reference.books} reference={reference} allBooks={books} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reference;