import React, { Component } from 'react';

import Form from './Form';

class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      dataForm: {}
    };

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onChangeInput(e) {
    const value = e.target.value;
    const name = e.target.name;

    if (name === 'nombre') {
      this.setState({
        name: value
      });
    } else if (name === 'description') {
      this.setState({
        description: value
      });
    }
  }

  onSubmitForm() {
    console.log(this.state.name);
    console.log(this.state.description);
  }

  render() {
    return (
      <Form
        name={this.state.name}
        description={this.state.description}
        onChangeInput={this.onChangeInput}
        onSubmitForm={this.onSubmitForm}
      />
    );
  }

}

export default FormContainer;
