
import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

export default function NewSodaForm(props) {

  function handleNewSodaFormSubmission(event) {
    event.preventDefault();
    props.onNewSodaCreation({ name: event.target.name.value, slogan: event.target.slogan.value, sugarType: event.target.sugarType.value, price: parseInt(event.target.price.value), quantity: parseInt(event.target.quantity.value), moneyMade: 0, id: v4() })
  }

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewSodaFormSubmission} buttonText="Add the Soda" />
    </React.Fragment>
  );
}

NewSodaForm.propTypes = {
  onNewSodaCreation: PropTypes.func
};