import classes from "../pages/TTTPage.module.css";
import {useState} from "react";
import {PlayerDto} from "../pages/TTTPage.tsx";

interface Props {
    playerDto: PlayerDto,
    isActive: boolean,
    handleNameChangeCallback: (player: PlayerDto) => void;
}

/*export default function Player({playerDto, isActive, handleNameChangeCallback}: Props) {
    <input id="name" name="name" type="text"  className={classes.playerName} required value={player.name} />
    <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
}*/
export default function Player({playerDto, isActive, handleNameChangeCallback}: Props) {

    const [player, setPlayer] = useState<PlayerDto>(playerDto);

    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // setIsEditing(!isEditing); is not best practice: If your new state depends on your previous state value, you should not update the state like this

        //instead, pass a function to your tate updating function. This function will automatically be called by React and will receive the guaranteed latest state value
        setIsEditing( (editing) => !editing);
        if(isEditing){
            handleNameChangeCallback(player);
        }
    }

    let playerNameElement = <span className={classes.playerName}>{player.name}</span>;

    function handlePlayerNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        const updatedPlayer = {...player, name: event.target.value};
        setPlayer(updatedPlayer);
        //console.log(playerDto.name);
    }

    if(isEditing) {
        //fyi: defaultValue attribute also exists
        playerNameElement = <input id="name" name="name" type="text"  className={classes.playerName} required value={player.name} onChange={handlePlayerNameChange}/>
    }
    return (
       <li className={isActive ? classes.active : undefined} key={player.symbol}>
           <span className={classes.player}>
               {playerNameElement}
               <span className={classes.playerSymbol}>{player.symbol}</span>
           </span>
           <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
       </li>
    );
}
