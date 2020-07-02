import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';



function AddItemForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleAddItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Item name' /><br />
        <input
          type='text'
          name='size'
          placeholder='Item size' /><br />
        <input
          type='text'
          name='color'
          placeholder='Item color' /><br />
        <input
          type='number'
          name='quantity'
          placeholder='Item quantity' /><br />
        <button type='submit'>Add Item</button>
      </form>
    </React.Fragment>
  );

  function handleAddItemFormSubmission(event) {
    event.preventDefault();
    props.onAddItemCreation({
      name: event.target.name.value,
      color: event.target.color.value,
      size: event.target.size.value,
      quantity: event.target.quantity.value,
      id: v4()
    })
  }
}

AddItemForm.propTypes = {
  onAddItemCreation: PropTypes.func
};

export default AddItemForm;