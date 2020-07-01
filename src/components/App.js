import React from 'react';
import './../index.css';
import Header from './Header';
import InventoryControl from './InventoryControl';
import ItemList from './ItemList';

function App() {
  return (
    <React.Fragment>
      <Header />
      <ItemList />
      <InventoryControl />
    </React.Fragment>
  );
}

export default App;
