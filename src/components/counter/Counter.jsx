import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

require('./counter.scss');

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.onCounterMore = this.onCounterMore.bind(this);
    this.onCounterLess = this.onCounterLess.bind(this);
  }

  onCounterMore() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  onCounterLess() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div className="counter-block">
        <ButtonToolbar>
          <Button
            bsStyle="success"
            onClick={this.onCounterMore}
          >
            Sumar
          </Button>
        </ButtonToolbar>
        <button type="button" className="btn btn-secondary" onClick={this.onCounterMore}>Sumar</button>
        <p style={{ margin: '10px auto' }}> {this.state.counter} </p>
        <button type="button" className="btn btn-secondary" onClick={this.onCounterLess}>Restar</button>
      </div>
    );
  }

}

export default Counter;
