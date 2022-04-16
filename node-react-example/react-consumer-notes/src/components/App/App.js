import './App.css';
import React, { useEffect, useState } from 'react';
import { getNotes } from '../../functions/notes';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    let mounted = true;
    getNotes()
      .then(items => {
        console.log(items);
        if (mounted) {
          setNotes(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div className="wrapper">
      <h1>Notes</h1>
      <ul>
        {notes.map(item => <li key={item._id}>{item.title}</li>)}
      </ul>

    </div>
  )
}

export default App;