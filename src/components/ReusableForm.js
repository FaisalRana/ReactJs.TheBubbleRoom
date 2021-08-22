import React from 'react'
import PropTypes from "prop-types"


export default function ReusableForm(props) {
  if (props.soda) {
    return (
      <React.Fragment>
        <form onSubmit={props.formSubmissionHandler}>
          <input type='text' name='name' defaultValue={props.soda.name} />
          <input type='number' name='heatLevel' defaultValue={props.soda.heatLevel} />
          <input type='text' name='description' defaultValue={props.soda.planet} />
          <input type='text' name='planet' defaultValue={props.soda.planet} />
          <input type='number' name='price' defaultValue={props.soda.price} />
          <input type='number' name='quantity' defaultValue={props.soda.quantity} />
          <button type='submit'>{props.buttonText}</button>
        </form>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <form onSubmit={props.formSubmissionHandler}>
          <input type='text' name='name' placeholder='Name' />
          <input type='number' name='heatLevel' placeholder='Heat Level' />
          <input type='text' name='description' placeholder='Description' />
          <input type='text' name='planet' placeholder='Planet' />
          <input type='number' name='price' placeholder='Price' />
          <input type='number' name='quantity' placeholder='Quantity' />
          <button type='submit'>{props.buttonText}</button>
        </form>
      </React.Fragment>
    )
  }
}

ReusableForm.propTypes = {
  soda: PropTypes.object,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}
