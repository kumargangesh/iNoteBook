import React, {useContext} from 'react';
import noteContext from '../NoteContext';

export default function About() {

  const context = useContext(noteContext);

  return (
    <div>this is About and name {context.name}</div>
  )
}
