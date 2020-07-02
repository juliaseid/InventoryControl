import React from 'react'
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <h3>Name : {props.name}</h3>
      <h3>Size : {props.size}</h3>
      <h3>Color : {props.color}</h3>
      <h3>Quantity : {props.quantity}</h3>
    </React.Fragment>


  );

}
Item.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
  quantity: PropTypes.number.isRequired,
  //id: PropTypes.string
};


export default Item;