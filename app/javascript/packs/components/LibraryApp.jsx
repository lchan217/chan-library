import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import AuthorContainer from './Containers/AuthorContainer'
import BookContainer from './Containers/BookContainer'
import ReferenceContainer from './Containers/ReferenceContainer'
import NavBar from './NavBar/NavBar'
class LibraryApp extends React.Component {

  render() {
    return (   
      <Router>
        <NavBar />
        <Redirect from="/" to="/books"/>
        <Route path="/books" component={BookContainer} exact />
        <Route path="/authors" component={AuthorContainer} />
        <Route path="/references" component={ReferenceContainer} />
      </Router>   
    )
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('library-app')
  app && ReactDOM.render(<LibraryApp />, app)
})