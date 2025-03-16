import {useState} from 'react';

export default function SomeComponent() {
    const [selected, setSelected] = useState(false);

    function handleClick() {

        //Following statement is wrong - this code won't work. It violates the "Rules of Hooks" as it calls a Hook function (useState)
        // inside of a nested function handleClick(). useState must be called inside React Function aka React Component

        //const [selected, setSelected] = useState(true);

        setSelected(true);
        console.log(selected)
    }

    return (
        <>
            <button onClick={handleClick}>Select</button>
            {selected}
        </>
    );
}