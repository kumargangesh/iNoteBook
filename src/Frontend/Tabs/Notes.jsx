import {useContext} from 'react';
import noteContext from '../Context/NoteContext';

export default function Notes() {

  const context = useContext(noteContext);

  return (
    <div>
      {context.course}
    </div>
  )
}
