import React from 'react';
import Soda from "./Soda";
import PropTypes from "prop-types"; 

function TicketList(props){
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

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList