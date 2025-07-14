import {React, useContext} from 'react';
import "./NoteItem.css";
import noteContext from '../Context/NoteContext';

export default function NoteItem(props) {

    const context = useContext(noteContext);

    const { deleteNote, updateNote } = context;

    const { note } = props;

    // const update =() => {

    // }

    return (
        <div className="card col-md-3">
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body my-3">
                <div className="titleandicon d-flex justify-content-between">
                    <h5 className="card-title">{note.title}</h5>
                    <div className="icons d-flex justify-content-around">
                        <i className="fa-solid fa-pen mx-2" />
                        <i className="fa-solid fa-trash mx-2" onClick={() => {
                            deleteNote(note._id)
                        }} />
                    </div>
                </div>
                <p className="card-text">{note.description}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}
