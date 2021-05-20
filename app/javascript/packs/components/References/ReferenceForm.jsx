import React, { useState, useEffect }  from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

const ReferenceForm = (props) => {
  const { books, reference, allBooks } = props
	const [ referenceName, setReferenceName] = useState('')
	const [ bookAttributes, setBookAttributes] = useState([])

  useEffect(() => {
    setReferenceName(reference.name)
    setBookAttributes(reference.books)
  }, [reference])

	const handleSubmit = () => {
		const body = {
			name: referenceName,
			book_attributes: bookAttributes
		};
			
		fetch("http://localhost:3000/api/v1/references", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify(body)
		})
			.then(resp => resp.json())
	}

	const onSelect = (selectedList, selectedItem) => {
		setBookAttributes([...bookAttributes, selectedItem])
	}

	const onRemove  = (selectedList, selectedItem) => {
		setBookAttributes(bookAttributes.filter(book => book !== selectedItem))
	}

	return (
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
	);
};

export default ReferenceForm;