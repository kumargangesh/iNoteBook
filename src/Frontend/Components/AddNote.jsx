import React, { useState } from 'react';
import noteContext from '../Context/NoteContext';
import { useContext } from 'react';

export default function AddNote() {

    const context = useContext(noteContext);

    const { addNote } = context;

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleDesc = (event) => {
        setDesc(event.target.value);
    }

    const addNewNote =() => {
        addNote(title, desc);
    }

    return (
        <div className="container my-3">

            <h1>Add a new Note</h1>

            <div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleTitle} value={title} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" onChange={handleDesc} value={desc} />
                </div>
                <button class="btn btn-primary" onClick={addNewNote}>Submit</button>
            </div>
        </div>
    )
}
