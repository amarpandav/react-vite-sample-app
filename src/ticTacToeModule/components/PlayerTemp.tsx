import {useState} from "react";

export default function PlayerTemp() {

    const [isEditing, setIsEditing] = useState(false); // initial value is false

    function handleEditClick() {
        //setIsEditing(!isEditing); // Expected: isEditing to set to true, because you are negating previous value(in this case initial value)
        //setIsEditing(!isEditing); // Expected: isEditing to set to false, because you are negating previously changed value
        //So you might say that nothing is actually happening - isEditing is just reverting to its initial value.

        //By default, the UI displays 'Edit Mode is Off' simply because our initial value is false, no magic here.
        //Question to you is, What do you expect to see when you click it just once?

        //this is how to solve it
        setIsEditing( (editing) => !editing);
        setIsEditing( (editing) => !editing);

        ////why? because React schedules the state updates behind the scenes meaning they are not performed instantly.
    }

    return (
        <button onClick={handleEditClick}>{isEditing ? 'Edit Mode is On' : 'Edit Mode is Off'}</button>
    );
}
