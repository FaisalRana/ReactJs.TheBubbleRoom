import React from 'react';
import Soda from "./Soda";
import PropTypes from "prop-types"; 

function SodaInventory(props){
  return (
    <React.Fragment>
      <hr/>
      {props.sodaList.map((soda, index) =>
        <Soda names={soda.name}
          company={soda.company}
          key={index}/>
      )}
    </React.Fragment>
  );
}

SodaInventory.propTypes = {
  SodaInventory: PropTypes.array
};

export default TicketList