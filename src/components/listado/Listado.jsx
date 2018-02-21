import React from 'react';
import Proptypes from 'prop-types';

class Listado extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('props', this.props.datos);
    const { datos } = this.props;
    return (
      <div>
        {datos.count ?
          <ul>Tenemos: {datos.count}
            {datos.results.map((item) => (
              <li>
                <p key={item.name}> {item.name}</p>
              </li>
            )
            )}
          </ul>
        :
          <p> Cargando... </p>
        }
      </div>
    );
  }
}

export default Listado;

Listado.propTypes = {
  datos: Proptypes.object
};

Listado.defaultProps = {
  datos: {}
};
