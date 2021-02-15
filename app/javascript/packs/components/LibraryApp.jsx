import React from 'react'
import ReactDOM from 'react-dom'
import Authors from './Authors/AuthorContainer'

class LibraryApp extends React.Component {
  render() {
    return (
      <div>
        <p>Library App</p>
        <Authors />
      </div>
    )
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('library-app')
  app && ReactDOM.render(<LibraryApp />, app)
})