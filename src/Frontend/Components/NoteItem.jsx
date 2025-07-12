import React from 'react'

export default function NoteItem(props) {

    const { note } = props;

    return (
        <div className="card col-md-3">
            {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body my-3">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
        </div>
    )
}
