import React from 'react'
import PropTypes from "prop-types"


export default function ReusableForm(props) {
  if (props.soda) {
    return (
      <React.Fragment>
        <form onSubmit={props.formSubmissionHandler}>
          <input type='text' name='name' defaultValue={props.soda.names} />
          <input type='number' name='slogan' defaultValue={props.soda.slogan} />
          <input type='text' name='sugarType' defaultValue={props.soda.sugarType} />
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
          <input type='number' name='slogan' placeholder='Heat Level' />
          <input type='text' name='sugarType' placeholder='sugarType' />
          <input type='text' name='sugarType' placeholder='sugarType' />
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
