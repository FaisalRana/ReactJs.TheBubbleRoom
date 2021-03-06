import React from 'react';
import Soda from "./Soda";
import PropTypes from "prop-types";


function SodaInventory(props) {
  const box = {
    border: 'dashed grey',
    padding: "10px",
    margin: "10px"
  }

  return (
    <React.Fragment>
    <div className="row">
      <div className="column">      
        <p>{props.instructions}</p>
      </div>

   
    {props.mainSodaInventory.map((soda, i) =>
        <div style = {box} key={i}>
          <Soda style={box}
            sodaSelected={props.SodaSelected}
            name={soda.name}
            slogan={soda.slogan}
            sugarType={soda.sugarType}
            price={soda.price}
            quantity={soda.quantity}
            id={soda.id}
            key={soda.key} />
        </div>
        )
    }
  
    </div>
    </React.Fragment>
  )
}

SodaInventory.propTypes = {
  mainsodaInventory: PropTypes.array,
  sodaSelected: PropTypes.func,
}

export default SodaInventory