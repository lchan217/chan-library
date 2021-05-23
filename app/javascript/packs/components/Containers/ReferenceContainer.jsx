import React, { useState, useEffect } from 'react';
import ReferenceForm from '../References/ReferenceForm'
import ReferenceIndex from '../References/ReferenceIndex'

const ReferenceContainer = () => {
  const [ books, setBooks ] = useState([])
  const [ references, setReferences ] = useState([])
  const [ showForm, setShowForm ] = useState(false)
  const [ referenceForForm, setReferenceForForm ] = useState({name: '', books: []})
  
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/books")
      .then(response => response.json())
      .then(bookResponse => {
        setBooks(bookResponse)
      })
      .catch(error => console.log(error))
    
    fetch("http://localhost:3000/api/v1/references")
      .then(response => response.json())
      .then(referenceData => {
        setReferences(referenceData)
      })
      .catch(error => console.log(error))

  }, [])

  const handleFormOpen = () => {
    setShowForm(true)
  }
  const handleFormClose = () => {
    setShowForm(false)
  }

  return (
      <div>
        <button onClick={handleFormOpen} type="button" className="btn btn-primary">Create New Reference</button>
        {showForm && <ReferenceForm showForm={setShowForm} closeForm={handleFormClose} allBooks={books} reference={referenceForForm} /> }
        <ReferenceIndex references={references} />
      </div>
  );
}

export default ReferenceContainer;
