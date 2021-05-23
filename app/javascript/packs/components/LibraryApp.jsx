import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import AuthorContainer from './Containers/AuthorContainer'
import BookContainer from './Containers/BookContainer'
import ReferenceContainer from './Containers/ReferenceContainer'

const LibraryApp = () => {
  const [showBooks, setShowBooks] = useState(false)
  const [showAuthors, setShowAuthors] = useState(true)
  const [showReferences, setShowReferences] = useState(false)

  const handleClick = (page) => {
    if(page === 'authors'){
      setShowBooks(false)
      setShowAuthors(true)
      setShowReferences(false)
    } else if(page === 'books'){
      setShowBooks(true)
      setShowAuthors(false)
      setShowReferences(false)
    } else if(page === 'references'){
      setShowBooks(false)
      setShowAuthors(false)
      setShowReferences(true)
    }
  }

  let showContent = null

  if(showBooks){
    showContent = <BookContainer />
  } else if(showAuthors){
    showContent = <AuthorContainer />
  } else if(showReferences){
    showContent = <ReferenceContainer />
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <li className="nav-item" onClick={() => handleClick('authors')}>Authors</li>
        <li className="nav-item" onClick={() => handleClick('books')}>Books</li>
        <li className="nav-item" onClick={() => handleClick('references')}>References</li>
      </nav>
      <div className='library-content'>
        {showContent}
      </div>
    </div>
  ) 
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('library-app')
  app && ReactDOM.render(<LibraryApp />, app)
})
