import React, { Component } from 'react';
import BookShow from '../Books/BookShow'
import BookIndex from '../Books/BookIndex'

class BookContainer extends Component {
  state = {
    books: [], 
    bookShowPage: false,
    book: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/books")
      .then(response => response.json())
      .then(response => {
        this.setState({
            books: response
        })
      })
      .catch(error => console.log(error))
  }

  handleClick = (event) => {
    const id = event.target.id
    fetch(`http://localhost:3000/api/v1/books/${id}`)
    .then(response => response.json())
    .then(response => {
      this.setState({
        book: response,
        bookShowPage: true
      })
    })
    .catch(error => console.log(error))
  }

  goBack = () => {
    this.setState({ bookShowPage: false})
  }

  render() {
    let bookData = null

    if(this.state.bookShowPage){
      bookData = (
        <div>
          <button onClick={this.goBack}>Go Back</button>
          <BookShow book={this.state.book}/>
        </div>
      )
    } else {
      bookData = (
        <div onClick={this.handleClick}>
          <BookIndex books={this.state.books} />
        </div>
      )
    }

    return (
      <div>
        <h1>Books</h1>
        <h6>Pick a row to see the authors and shared references</h6>
        {bookData}
      </div>
    );
  }
}

export default BookContainer;