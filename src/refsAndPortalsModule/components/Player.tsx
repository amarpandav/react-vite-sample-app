import classes from "./Player.module.css";
import {useRef, useState} from "react";

export default function Player() {

    const playerNameRef = useRef<HTMLInputElement>(null);
    const [playerName, setPlayerName] = useState<string | null>();

    function handleClick() {
        setPlayerName( ()=> playerNameRef?.current?.value)
    }

    return (
    <section id="player" className={classes.player}>
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerNameRef} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
