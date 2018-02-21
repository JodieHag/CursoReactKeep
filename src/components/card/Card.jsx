import React from 'react';
import Proptypes from 'prop-types';


const Card = props => (
  <div className="col">
    <div className="card" style={{ width: '18rem', margin: '0 auto' }}>
      <img className="card-img-top" src={props.photo} alt="card-foto" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  </div>
);

export default Card;

Card.propTypes = {
  photo: Proptypes.string,
  name: Proptypes.string,
  description: Proptypes.string
};

Card.defaultProps = {
  photo: '',
  name: 'no-name',
  description: 'no-description'
};
