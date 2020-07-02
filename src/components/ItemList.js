import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

// const itemList = [
//   {
//     name: "hat",
//     color: "red",
//     size: "XXL",
//     quantity: "1"
//   },
//   {
//     name: "hat",
//     color: "red",
//     size: "XL",
//     quantity: "4"
//   }
// ];

// const itemList = [];

function ItemList(props) {
  console.log("itemList" + props.itemList);

  return (
    <React.Fragment>
      <hr />
      {props.itemList.map((item) => // Loop through the list passed down from InventoryControl.
        <Item name={item.name}
          color={item.color}
          size={item.size}
          quantity={item.quantity}
          // whenItemClicked={props.onItemSelection}
          id={item.id}
          key={item.id} />
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
  // onItemSelection: PropTypes.func
};

export default ItemList;

  // function ItemList(props) {
  //   return (
  //     <React.Fragment>
  //       <Item
  //         name="hat"
  //         color="red"
  //         size="XXL"
  //         quantity="1"
  //       />
  //       <Item
  //         name="hat"
  //         color="red"
  //         size="XL"
  //         quantity="4"
  //       />
  //     </React.Fragment>
  //   )
  // }