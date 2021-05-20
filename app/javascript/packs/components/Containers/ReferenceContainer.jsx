import React, { useState, useEffect } from 'react';
import ReferenceForm from '../References/ReferenceForm'
import ReferenceIndex from '../References/ReferenceIndex'

const ReferenceContainer = () => {
  const [ books, setBooks ] = useState([])
  const [ references, setReferences ] = useState([])
  const [ showForm, setShowForm ] = useState(false)
  const [ showRefIndex, setShowRefIndex ] = useState(false)
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

  const handleFormClick = () => {
    setShowForm(true)
  }

  const handleIndexClick = () => {
    setShowRefIndex(!showRefIndex)
  }

  let action = 'show'
  let refIndexPage = null
  if(showRefIndex){
		refIndexPage = <ReferenceIndex references={references} />
		action = 'Hide'
  } else {
    action = 'Show'
  }

  return (
		<div>
			<button onClick={handleFormClick}>Create New Reference</button>
			{showForm && <ReferenceForm allBooks={books} reference={referenceForForm} /> }
			<button onClick={handleIndexClick}>{action} All References</button>
			{refIndexPage}
		</div>
  );
}

export default ReferenceContainer;