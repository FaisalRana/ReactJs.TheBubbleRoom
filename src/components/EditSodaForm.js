import React from 'react'
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'



function EditSodaForm(props) {
  const { soda } = props
  function handleEditSodaFormSubmission(event) {
    event.preventDefault();
    props.onEditSoda({ names: event.target.name.value, slogan: parseInt(event.target.slogan.value), sugarType: event.target.sugarType.value, price: parseInt(event.target.price.value), quantity: parseInt(event.target.quantity.value), moneyMade: soda.moneyMade, id: soda.id })
  }

  return (
    <React.Fragment>
      <div className="sodalist">
        <b>{soda.names}'s Ticket</b>
        <p> <em>sugarType:</em> {soda.sugarType} </p>
        <li>Heat Level: {soda.slogan}</li>
        <li>Price: {soda.price}</li>
        <li>Quantity: {soda.quantity}</li>
        <ReusableForm
          soda={soda}
          formSubmissionHandler={handleEditSodaFormSubmission}
          buttonText="Update Soda" />
      </div>
    </React.Fragment >
  )
}

EditSodaForm.propTypes = {
  soda: PropTypes.object,
  onEditSoda: PropTypes.func
}

export default EditSodaForm