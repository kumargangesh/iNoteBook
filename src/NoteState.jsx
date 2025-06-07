import noteContext from "./NoteContext";

const data = {
    "name" : "gangesh",
    "course" : "MERN"
}

const NoteState = (props) => {
    <noteContext.Provider value={data}>
        {props.children}
    </noteContext.Provider>
}

export default NoteState;