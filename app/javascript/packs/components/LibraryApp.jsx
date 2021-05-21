import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import AuthorContainer from './Containers/AuthorContainer'
import BookContainer from './Containers/BookContainer'
import ReferenceContainer from './Containers/ReferenceContainer'

const LibraryApp = () => {
  const [showBooks, setShowBooks] = useState(false)

  const handleClick = () => {
    const currentView = showBooks
    setShowBooks(!currentView)
  }

  let showContent = null
  let page = null
  if(showBooks){
    showContent = <BookContainer />
    page = "Author"
  } else {
    showContent = <AuthorContainer />
    page = "Book"
  }

  return (
    <div>
      <button onClick={handleClick}>Switch to {page} View</button>
      <ReferenceContainer />
      {showContent}
    </div>
  ) 
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('library-app')
  app && ReactDOM.render(<LibraryApp />, app)
})
