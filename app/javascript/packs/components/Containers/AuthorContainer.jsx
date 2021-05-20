import React, { useState, useEffect } from 'react';
import AuthorIndex from '../Authors/AuthorIndex'
import AuthorShow from '../Authors/AuthorShow'

const AuthorContainer = () => {
  const [ authors, setAuthors ] = useState([])
  const [ authorShowPage, setAuthorShowPage ] = useState(false)
  const [ author, setAuthor ] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/authors")
      .then(response => response.json())
      .then(responseData => {
        setAuthors(responseData)
      })
      .catch(error => console.log(error))
  }, [])

  const handleClick = (event) => {
    const id = event.target.id
    
    fetch(`http://localhost:3000/api/v1/authors/${id}`)
    .then(response => response.json())
    .then(response => {
      setAuthor(response)
      setAuthorShowPage(true)
    })
    .catch(error => console.log(error))
  }

  const goBack = () => {
    setAuthorShowPage(false)
  }
  
  let authorData = null

  if(authorShowPage){
    authorData = (
      <div>
        <button onClick={goBack}>Go Back</button>
        <AuthorShow author={author}/>
      </div>
    )
  } else {
    authorData = (
      <div onClick={handleClick}>
        <AuthorIndex authors={authors} />
      </div>
    )
  }

  return (
    <div >
      <h1>Authors</h1>
      <h6>Pick a row to see the author and their Books</h6>
      {authorData}
    </div>
  );
}

export default AuthorContainer;