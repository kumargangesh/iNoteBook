import React from 'react'
import Routing from './Routing'
import NoteState from './Context/NoteState'

export default function FrontPage() {
  return (
    <div>
        <NoteState>
            <Routing />
        </NoteState>
    </div>
  )
}
