import React from 'react';
import noteContext from '../Context/NoteContext';
import { useContext } from 'react';
import NoteItem from './NoteItem';

export default function Note(props) {

  const context = useContext(noteContext);

  const { notes, setNotes } = context;

  return (
    <div className="row my-3">
      <h1>Your Notes</h1>
      {
        notes.map(note => {
          return <NoteItem note = {note} />;
        })
      }
    </div>
  )
}
