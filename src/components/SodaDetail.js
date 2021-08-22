import React from "react";
import PropTypes from "prop-types";

function SodaDetail(props) {

  function handleBuy(event) {

    event.preventDefault();
    props.buyButtonClick({
      name: props.soda.name, slogan: props.soda.slogan, sugarType: props.soda.sugarType,
      price: props.soda.price, quantity: props.soda.quantity - event.target.quantity.value,
      moneyMade: props.soda.moneyMade + (event.target.quantity.value * props.soda.price), salePrice: "+" + event.target.quantity.value * props.soda.price, id: props.soda.id
    })
    props.buttonStateFunc(event.target.quantity.value * props.soda.price)
  }

  let show = null;

  if (props.pageVisible === "manage") {
    show = <div>
      <p><button onClick={props.editButtonClick}>{props.buttonText}</button></p>
      <p><button onClick={() => props.deleteButtonClick(props.soda.id)}>{props.buttonText1}</button></p>
    </div>
  } else {
    show = <div>
      <form onSubmit={handleBuy}>
        Quanity you want:
        <input type='number' name='quantity' placeholder='Quanity'></input>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </div>
  }
  return (
    <React.Fragment>
      <div className="sodalist">
        <div className="row">
          <div className="column">
            <h2>{props.soda.name}</h2>
            <p><em>{props.soda.slogan}</em>  </p>
            <p>Sugar Type: {props.soda.sugarType}</p>
            <p>Price: {props.soda.price}</p>
            <p>Quantity: {props.soda.quantity}</p>
            <p>Money Made: ${props.soda.moneyMade}</p>
            {props.buttonState}
          </div>
          <div className="column">
            <div className = "box">
            {props.instructions}
            {show}
            </div>
          </div>
        </div>
      </div>

    </React.Fragment >
  );

}

SodaDetail.prototypes = {
  soda: PropTypes.object,
  buttonText: PropTypes.string,
  editButtonClick: PropTypes.func,
  deleteButtonClick: PropTypes.func,
  buttonText1: PropTypes.string,
  buyButtonClick: PropTypes.func,
  pageVisible: PropTypes.string,
  buttonStateFunc: PropTypes.func,
  buttonState: PropTypes.string
}

export default SodaDetail;