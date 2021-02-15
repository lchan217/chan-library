import React, { Component } from 'react';
import AuthorIndex from './AuthorIndex'
import AuthorShow from './AuthorShow'

class Authors extends Component {
  state = {
    authors: [],
    authorShowPage: false,
    author: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/authors")
      .then(response => response.json())
      .then(response => {
        this.setState({
            authors: response
        })
      })
      .catch(error => console.log(error))
  }

  handleClick = (event) => {
    const id = event.target.id
    
    fetch(`http://localhost:3000/api/v1/authors/${id}`)
    .then(response => response.json())
    .then(response => {
      this.setState({
        author: response,
        authorShowPage: true
      })
    })
    .catch(error => console.log(error))
  }

  goBack = () => {
    this.setState({ authorShowPage: false })
  }

  render() {
    let authorData = null

    if(this.state.authorShowPage){
      authorData = (
        <div>
          <button onClick={this.goBack}>Go Back</button>
          <AuthorShow author={this.state.author}/>
        </div>
      )
    } else {
      authorData = (
        <div onClick={this.handleClick}>
          <AuthorIndex authors={this.state.authors} />
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
}

export default Authors;