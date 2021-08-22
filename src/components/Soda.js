import React from 'react';
import PropTypes from 'prop-types';

function Soda(props) {
  return (
    <React.Fragment>
      <div className ="box">
        <div onClick={() => props.sodaSelected(props.id)}>
          <h2>{props.name}</h2>
          <p><em>{props.slogan}</em></p>
          <p>Sweetner: {props.sugarType}</p>
          <p>Price: ${props.price}</p>
          <p>Quantity Available: {props.quantity}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

Soda.propTypes = { // lower camel case because its a property here
  name: PropTypes.string.isRequired,
  slogan: PropTypes.number, // upper camel case because its reffering to the library
  sugarType: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number.isRequired,
  SodaSelected: PropTypes.func
};

export default Soda;