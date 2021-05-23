import React, { useState, useEffect, useCallback }  from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import Modal from '../../ui/Modal'

const ReferenceForm = (props) => {
  const { books, reference, allBooks, editId } = props
  const [ referenceName, setReferenceName] = useState('')
  const [ bookAttributes, setBookAttributes] = useState([])
  const [ errorMessage, setErrorMessage] = useState('')
  const [ showForm, setShowForm ] = useState(true)

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
      .then(data => {
        if(data.status === "Error"){
          setErrorMessage(data.error)
        } else {
          setErrorMessage('')
          location.reload()
        }
      })
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
      {errorMessage && <Modal onClose={clearError}>{errorMessage}</Modal>}
      {showForm && 
      <Modal onClose={props.closeForm}>
        <form onSubmit={handleSubmit} className="reference-form">
            <label>
            Name:
            <input 
                type="text" 
                value={referenceName} 
                onChange={event => {
                    setReferenceName(event.target.value)
                }}
                className="form-item"
            />
            </label>
            <br/>
            <Multiselect
            options={allBooks}
            displayValue="title"
            value={bookAttributes}
            avoidHighlightFirstOption={true}
            onSelect={onSelect}
            onRemove={onRemove}
            selectedValues={books}
            className="form-item"
            placeholder="Select Books"
            />
            <button className="btn btn-secondary form-item submit-button">Submit</button>
        </form>
      </Modal>
    }
    </div>
	);
};

export default ReferenceForm;