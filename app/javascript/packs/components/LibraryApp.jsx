import React from 'react'
import ReactDOM from 'react-dom'
import AuthorContainer from './Containers/AuthorContainer'
import BookContainer from './Containers/BookContainer'
import ReferenceContainer from './Containers/ReferenceContainer'
class LibraryApp extends React.Component {
  state = {
    showBooks: false
  }

  handleClick = () => {
    const currentView = this.state.showBooks
    this.setState({ showBooks: !currentView })
  }

  render() {
    let showContent = null
    let page = null
    if(this.state.showBooks){
      showContent = <BookContainer />
      page = "Author"
    } else {
      showContent = <AuthorContainer />
      page = "Book"
    }

    return (
      <div>
        <p>Library App</p>
        <button onClick={this.handleClick}>Switch to {page} View</button>
        <ReferenceContainer />
        {showContent}
      </div>
    )
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('library-app')
  app && ReactDOM.render(<LibraryApp />, app)
})