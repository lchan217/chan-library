import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

class ReferenceForm extends Component {
  constructor(props) {
    super(props)
    this.nameRef = React.createRef()
    this.multiselectRef = React.createRef();
  }

  handleSubmit = () => {
    
    const body = {
      name: this.nameRef.current.value,
      book_attributes: this.multiselectRef.current.state.selectedValues
    };

    fetch("http://localhost:3000/api/v1/references", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
             type="text"
             name="name"
             ref={this.nameRef}
             placeholder="Shared Reference Name"/>
          </label>
          <Multiselect
            options={this.props.books}
            displayValue="title"
            ref={this.multiselectRef}
            avoidHighlightFirstOption={true}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default ReferenceForm;