import React from 'react';
import axios from 'axios';

import Listado from './Listado';

class ListadoContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      datos: {}
    };
  }

  componentWillMount() {
    axios.get('https://swapi.co/api/people/')
    .then((response) => {
      const data = response.data;
      this.setState({
        datos: data
      });
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    console.log('state', this.state.datos);
    return (
      <Listado
        datos={this.state.datos}
      />
    );
  }
}

export default ListadoContainer;
