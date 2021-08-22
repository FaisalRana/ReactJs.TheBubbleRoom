import React from 'react';
import Soda from "./Soda";
import PropTypes from "prop-types";

function SodaInventory(props) {
  return (
    <React.Fragment>
      {
        props.mainSodaInventory.map((soda) =>
          <Soda
            sodaSelected={props.SodaSelected}
            name={soda.names}
            slogan={soda.slogan}
            sugarType={soda.sugarType}
            price={soda.price}
            quantity={soda.quantity}
            id={soda.id}
            key={soda.id} />
        )
      }

    </React.Fragment>
  )
}

SodaInventory.propTypes = {
  mainsodaInventory: PropTypes.array,
  sodaSelected: PropTypes.func
}

export default SodaInventory