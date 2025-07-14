import React, { useEffect, useState } from 'react';
import noteContext from '../Context/NoteContext';
import { useContext } from 'react';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

export default function Note(props) {

  const context = useContext(noteContext);

  const {  fetchAllNotes } = context;

  // const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log(fetchAllNotes());
  }, []);

  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h1>Your Notes</h1>
        {/* {
          notes.length === 0 ?
            <h1>no notes</h1>
          :
            <h1>notes</h1>
        } */}
      </div>
    </>
  )
}
