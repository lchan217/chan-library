import React, { Component } from 'react';
import ReferenceForm from '../References/ReferenceForm'
import ReferenceIndex from '../References/ReferenceIndex'
class ReferenceContainer extends Component {
  state = {
    books: [],
    showForm: false,
    references: [],
    showIndex: false
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

      fetch("http://localhost:3000/api/v1/references")
      .then(response => response.json())
      .then(response => {
        this.setState({
            references: response
        })
      })
      .catch(error => console.log(error))
  }

  handleFormClick = () => {
    this.setState({ showForm: true })
  }

  handleIndexClick = () => {
    const showIndex = this.state.showIndex
    this.setState({ showIndex: !showIndex })
  }

  render() {
    let showRefForm = null
    let action = 'show'

    if(this.state.showForm){
      showRefForm = <ReferenceForm books={this.state.books} /> 
    }

    let showIndex = null
    if(this.state.showIndex){
      showIndex = <ReferenceIndex references={this.state.references} />
      action = 'Hide'
    } else {
      action = 'Show'
    }

    return (
      <div>
        <button onClick={this.handleFormClick}>Create New Reference</button>
        {showRefForm}
        <button onClick={this.handleIndexClick}>{action} All References</button>
        {showIndex}
      </div>
    );
  }
}

export default ReferenceContainer;