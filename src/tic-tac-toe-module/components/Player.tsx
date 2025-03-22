import classes from "../pages/TTTPage.module.css";
import {useState} from "react";

interface Props {
    initialPlayerName: string;
    playerSymbol: string;
    isActive: boolean
}

export default function Player({initialPlayerName, playerSymbol, isActive}: Props) {

    const [playerName, setPlayerName] = useState(initialPlayerName);

    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // setIsEditing(!isEditing); is not best practice: If your new state depends on your previous state value, you should not update the state like this

        //instead, pass a function to your tate updating function. This function will automatically be called by React and will receive the guaranteed latest state value
        setIsEditing( (editing) => !editing);
    }

    let playerNameElement = <span className={classes.playerName}>{playerName}</span>;

    function handlePlayerNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPlayerName(event.target.value);
    }

    if(isEditing) {
        //fyi: defaultValue attribute also exists
        playerNameElement = <input id="name" name="name" type="text"  className={classes.playerName} required value={playerName} onChange={handlePlayerNameChange}/>
    }
    return (
       <li className={isActive ? classes.active : undefined}>
           <span className={classes.player}>
               {playerNameElement}
               <span className={classes.playerSymbol}>{playerSymbol}</span>
           </span>
           <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
       </li>
    );
}
