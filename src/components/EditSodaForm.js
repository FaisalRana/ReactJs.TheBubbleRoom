import React from 'react'
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'



function EditSodaForm(props) {
  const { soda } = props
  function handleEditSodaFormSubmission(event) {
    event.preventDefault();
    props.onEditSoda({ name: event.target.name.value, heatLevel: parseInt(event.target.heatLevel.value), description: event.target.description.value, planet: event.target.planet.value, price: parseInt(event.target.price.value), quantity: parseInt(event.target.quantity.value), moneyMade: soda.moneyMade, id: soda.id })
  }

  return (
    <React.Fragment>
      <div className="sodalist">
        <b>{soda.name}'s Ticket</b>
        <p> <em>Description:</em> {soda.description} </p>
        <li>Heat Level: {soda.heatLevel}</li>
        <li>Planet:{soda.planet}</li>
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