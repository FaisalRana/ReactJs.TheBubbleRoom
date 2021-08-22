import React from 'react';
import NewSodaForm from './NewSodaForm';
import SodaDetail from './SodaDetail';
import SodaInventory from './SodaInventory';
import EditSodaForm from './EditSodaForm';


class SodaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterSodaInventory: [
        {
          name: "Pepsi Cola",
          slogan: "That's What I Like",
          sugarType: "Corn Syrup",
          price: 1.50,
          quantity: 100,
          moneyMade: 0,
          id: 1
        }
      ],
      selectedSoda: null,
      editButtonPressed: false,
      pageVisible: "home",
      buttonState: null
    };
  }

  handleButtonClick = () => {
    if (this.state.selectedSoda != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSoda: null,
        editButtonPressed: false
      })
    } else {
      this.setState(prevState => (
        { formVisibleOnPage: !prevState.formVisibleOnPage }));
    }
  }
  handleManageButtonClick = () => {
    this.setState({
      pageVisible: "manage"
    })
  }

  handleBuySoda = (Soda) => {
    const newMasterSodaInventory = this.state.masterSodaInventory.filter(Soda => Soda.id !== this.state.selectedSoda.id).concat(Soda)
    this.setState({
      masterSodaInventory: newMasterSodaInventory,
      selectedSoda: Soda
    })
  }
  handleSelectedSoda = (id) => {
    const newSelectedSoda = this.state.masterSodaInventory.filter(Soda => Soda.id === id)[0]
    this.setState({ selectedSoda: newSelectedSoda })
  }

  handleNewSodaCreation = (Soda) => {
    const newMasterSodaInventory = this.state.masterSodaInventory.concat(Soda);
    this.setState({
      masterSodaInventory: newMasterSodaInventory,
      formVisibleOnPage: false
    })
  }

  handlePriceThing = (int) => {
    this.setState({
      buttonState: <div className="saleprice">+${int}</div>
    })
  }


  handleEditSodaCreation = (Soda) => {
    const newMasterSodaInventory = this.state.masterSodaInventory.filter(Soda => Soda.id !== this.state.selectedSoda.id).concat(Soda)
    this.setState({
      masterSodaInventory: newMasterSodaInventory,
      // formVisibleOnPage: false,
      editButtonPressed: false,
      selectedSoda: Soda
    })

  }
  handleEditButton = () => {
    this.setState({ editButtonPressed: true })
  }

  handleHomeButton = () => {
    this.setState({
      pageVisible: "home",
      selectedSoda: null,
      editButtonPressed: false,
      formVisibleOnPage: false
    })
  }

  handleSellButtonClick = () => {
    this.setState({ pageVisible: "sellPage" })
  }

  handleDeleteButton = (id) => {
    const newMasterSodaInventory = this.state.masterSodaInventory.filter(Soda => Soda.id !== id);
    this.setState({
      formVisibleOnPage: false,
      masterSodaInventory: newMasterSodaInventory,
      selectedSoda: null
    })

  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let instructions = null;
    if (this.state.pageVisible === "manage") {
      if (this.state.editButtonPressed) {
        currentlyVisibleState = <EditSodaForm onEditSoda={this.handleEditSodaCreation} soda={this.state.selectedSoda} />
        buttonText = "Return to Soda Inventory";
      }
      else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewSodaForm onNewSodaCreation={this.handleNewSodaCreation} />;
        buttonText = "Return to Soda Inventory";
      } else if (this.state.selectedSoda != null) {
        currentlyVisibleState = <SodaDetail soda={this.state.selectedSoda} pageVisible={this.state.pageVisible} editButtonClick={this.handleEditButton} deleteButtonClick={this.handleDeleteButton} buttonText="Edit Soda" buttonText1="Delete Soda" />
        buttonText = "Return to Soda Inventory";
      }
      else {
        instructions = "Click to see details"
        currentlyVisibleState = <SodaInventory  instructions={instructions} mainSodaInventory={this.state.masterSodaInventory} SodaSelected={this.handleSelectedSoda} />
        buttonText = "Add Soda to Inventory";
      }

      return (
        <React.Fragment>
          {currentlyVisibleState}
          <p><button onClick={this.handleButtonClick}>{buttonText}</button></p>
          <p><button onClick={this.handleHomeButton}>Go back Home</button></p>
        </React.Fragment>
      )
    }

    else if (this.state.pageVisible === "sellPage") {
      if (this.state.selectedSoda != null) {
        instructions = ""
        currentlyVisibleState = <SodaDetail instructions={instructions} SodaDetail buttonState={this.state.buttonState} buttonStateFunc={this.handlePriceThing} soda={this.state.selectedSoda} buyButtonClick={this.handleBuySoda} pageVisible={this.state.pageVisible} buttonText="Sell Soda" />
        buttonText = "Return to Soda Inventory";
      }
      else {
        instructions = "Click to see details"
        currentlyVisibleState = <SodaInventory  instructions={instructions} mainSodaInventory={this.state.masterSodaInventory} SodaSelected={this.handleSelectedSoda} />
        buttonText = "Add Soda to Inventory";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <p> <button onClick={this.handleHomeButton}>Go back Home</button></p>
        </React.Fragment>
      )

    }



    else {
      return (
        <React.Fragment>
          <p>Please Select <b> Manage </b>Sodas or <b> Sell </b>Sodas</p>
          <button onClick={this.handleManageButtonClick}>Manage Soda Inventory</button>
          <button onClick={this.handleSellButtonClick}>Sell Soda</button>
        </React.Fragment>
      )


    }

  }
}

export default SodaControl;