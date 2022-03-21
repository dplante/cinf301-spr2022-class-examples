import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Entries from '../Entries/Entries.js';
import React from 'react';
import createRowData from '../../functions/createRowData.js';

/*
 * As the "fake" data program no longer works, neither does 
 * this code.  However, it provides a template for how to 
 * set up components to display data.
 */
function App() {
  const row = createRowData(3);
  console.log(row);
  return (
    <>
      <Entries row={row} />
    </>
  );
}

export default App;
