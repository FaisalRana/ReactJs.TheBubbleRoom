import React from 'react';
import NewTicketForm  from './NewTicketForm'
import TicketList from './TicketList';

class BubblesControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MasterSodaList: [],
    };
    // this.handleClick = this.handleClick.bind(this);
    console.log(this);
  }

  handleClick = () => { 
      console.log(this);
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({masterTicketList: newMasterTicketList,
                  counter: 4 });
  }

  render(){;
    let currentlyVisibleState = null;
    let buttonText = null;
    let counter = this.state.counter;
    if (this.state.counter === 0) {
      currentlyVisibleState = "Have you gone through all the steps on the Learn How to Program debugging lesson?"
      buttonText = "Yes";
    } else if (this.state.counter === 1) {
      currentlyVisibleState = "Have you asked another pair for help?"
      buttonText = "Yes";
    } else if (this.state.counter === 2) {
      currentlyVisibleState = "Have you spent 15 minutes going through through the problem documenting every step?"
      buttonText = "Yes";
    } else if (this.state.counter === 3) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} />
      buttonText = "Add Ticket";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        <p> Button Click Count: {counter} </p>
      </React.Fragment>
    );
  }
}
export default TicketControl;
