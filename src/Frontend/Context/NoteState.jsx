import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {

    const host = "http://localhost:5000";

    const [notes, setNotes] = useState();

    // to add a Note

    const fetchAllNotes =async() => {
        const response = await(fetch(`${host}/mern/notes/fetchallnotes`, {
            method : "GET",
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg3Mjg0ZGFmMjhhNjVjNmQ0MDY4ZjJmIn0sImlhdCI6MTc1MjMzNTU4OX0.jkgZHl2OdzQvPwjDmAM5iFQt87gd7Fqu5Rsdh-Wmirc"
            },
            // body : JSON.stringify({title, description})
        }));

        const allNotes = await response.json();
        console.log(allNotes);
        // setNotes(allNotes);
        return allNotes;
    }

    const addNote =async(title, description) => {
        // const note = {
        //     "_id": "6872b425d8877e76da88c910",
        //     "user": "687284daf28a65c6d4068f2f",
        //     "title": title,
        //     "description": description,
        //     "__v": 0
        // };

        // Now we are going to make API calls 

        const response = await(fetch(`${host}/mern/notes/addNote`, {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg3Mjg0ZGFmMjhhNjVjNmQ0MDY4ZjJmIn0sImlhdCI6MTc1MjMzNTU4OX0.jkgZHl2OdzQvPwjDmAM5iFQt87gd7Fqu5Rsdh-Wmirc"
            },
            body : JSON.stringify({title, description})
        }));

        // setNotes(notes.concat(note));
    }

    // to delete a Note

    const deleteNote =async(id) => {

        const response = await(fetch(`${host}/mern/Notes/deleteNote/${id}`, {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg2OTdlYjdhMjFmNTQyYjM3NGIwMWVkIn0sImlhdCI6MTc1MTc0NDk5OH0.98A3XgiwrsAkrBBTYYiuStISxOvF0aaqx75UKxgw-8s'
            },
            body : JSON.stringify()
        }));

        console.log("note to delete, with ID: "+id);
        const newNotes = notes.filter((note) => {
            return note._id !== id
        });
        setNotes(newNotes);
    }

    // to update a Note

    const updateNote =async(id, title, description) => {

        // Now we are going to make API calls 

        const response = await(fetch(`${host}/mern/Notes/updateNote/${id}`, {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg2OTdlYjdhMjFmNTQyYjM3NGIwMWVkIn0sImlhdCI6MTc1MTc0NDk5OH0.98A3XgiwrsAkrBBTYYiuStISxOvF0aaqx75UKxgw-8s'
            },
            body : JSON.stringify()
        }));


        for(let g=0;g<notes.length;g++){
            if(notes[g]._id === id){
                notes[g].title = title;
                notes[g].description = description;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote, fetchAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
