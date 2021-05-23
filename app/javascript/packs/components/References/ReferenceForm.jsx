import React, { useState, useEffect, useCallback }  from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import Modal from '../../ui/Modal'

const ReferenceForm = (props) => {
  const { books, reference, allBooks, editId } = props
  const [ referenceName, setReferenceName] = useState('')
  const [ bookAttributes, setBookAttributes] = useState([])
  const [ errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setReferenceName(reference.name)
    setBookAttributes(reference.books)
  }, [reference])

	const handleSubmit = (event) => {
    event.preventDefault()
    const body = {
      name: referenceName,
      book_attributes: bookAttributes
    };
    if(editId){
    fetch(`http://localhost:3000/api/v1/references/${editId}`, {
    method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
      body: JSON.stringify(body)
      })
      .then(resp => resp.json())
    } else {
      fetch("http://localhost:3000/api/v1/references", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body: JSON.stringify(body)
      })
      .then(resp => resp.json())
      .then(data => {
        if(data.status === "Error"){
          setErrorMessage(data.error)
        } else {
          setErrorMessage('')
          location.reload()
        }
      })
    }	
	}

	const onSelect = (selectedList, selectedItem) => {
		setBookAttributes(selectedList)
	}

	const onRemove  = (selectedList, selectedItem) => {
		setBookAttributes(selectedList)
	}

  const clearError = useCallback(() => {
    setErrorMessage('')
  }, [])

	return (
    <div>
      {errorMessage && <Modal error={errorMessage} onClose={clearError} />}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={referenceName} 
          onChange={event => {
            setReferenceName(event.target.value)
          }}
        />

        <Multiselect
          options={allBooks}
          displayValue="title"
          value={bookAttributes}
          avoidHighlightFirstOption={true}
          onSelect={onSelect}
          onRemove={onRemove}
          selectedValues={books}
        />
        <button>Submit</button>
      </form>
    </div>
	);
};

export default ReferenceForm;