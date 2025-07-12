import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {

    const initialNotes = [
        {
            "_id": "68728520f28a65c6d4068f37",
            "user": "687284daf28a65c6d4068f2f",
            "title": "K1",
            "description": "this is K1 note",
            "__v": 0
        },
        {
            "_id": "6872858ef28a65c6d4068f3a",
            "user": "687284daf28a65c6d4068f2f",
            "title": "K2",
            "description": "this is K2 note",
            "__v": 0
        },
        {
            "_id": "6872b41cd8877e76da88c90d",
            "user": "687284daf28a65c6d4068f2f",
            "title": "K3",
            "description": "this is K3 note",
            "__v": 0
        },
        {
            "_id": "6872b425d8877e76da88c910",
            "user": "687284daf28a65c6d4068f2f",
            "title": "K4",
            "description": "this is K4 note",
            "__v": 0
        }
    ];

    const [notes, setNotes] = useState(initialNotes);

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
