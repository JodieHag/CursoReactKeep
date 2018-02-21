import React from 'react';
import Proptypes from 'prop-types';


const Form = (props) => (
  <form style={{ margin: '0 auto' }}>
    <div className="input-group mb-3">
      <input type="text" className="form-control" name="nombre" placeholder="Nombre" value={props.name} onChange={props.onChangeInput} />
    </div>
    <div className="input-group mb-3">
      <input type="text" className="form-control" name="description" placeholder="Descripción" value={props.description} onChange={props.onChangeInput} />
    </div>
    <button type="button" className="btn btn-secondary" onClick={props.onSubmitForm}> Enviar </button>

    <p>
      Hola! {props.name}
    </p>

    <p>Descripción: {props.description}</p>
  </form>
);

export default Form;

Form.propTypes = {
  name: Proptypes.string,
  onChangeInput: Proptypes.func,
  description: Proptypes.string,
  onSubmitForm: Proptypes.func
};

Form.defaultProps = {
  name: 'Judit',
  description: 'que tal',
  onChangeInput: null,
  onSubmitForm: null
}
