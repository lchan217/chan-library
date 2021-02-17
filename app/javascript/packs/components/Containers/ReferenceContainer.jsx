import React, { Component } from 'react';
import ReferenceForm from '../References/ReferenceForm'

class ReferenceContainer extends Component {
  state = {
    books: [],
    showForm: false
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

  handleFormClick = () => {
    this.setState({ showForm: true })
  }

  render() {
    let showRefForm = null

    if(this.state.showForm){
      showRefForm = <ReferenceForm books={this.state.books} /> 
    }

    return (
      <div>
        <button onClick={this.handleFormClick}>Create New Reference</button>
        {showRefForm}
      </div>
    );
  }
}

export default ReferenceContainer;