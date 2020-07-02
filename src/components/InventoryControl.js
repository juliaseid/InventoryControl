import React from 'react';
import ItemList from './ItemList';
import AddItemForm from './AddItemForm';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: []
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    console.log(newMasterItemList.length);
    this.setState({
      masterItemList: newMasterItemList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    let addItemButton = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddItemForm onAddItemCreation={this.handleAddingNewItemToList} />
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.masterItemList} />


      addItemButton = <button onClick={this.handleClick}>Add Item</button>
    }

    return (

      <React.Fragment>
        {currentlyVisibleState}
        {addItemButton}
      </React.Fragment>

    );
  }
}

export default InventoryControl;