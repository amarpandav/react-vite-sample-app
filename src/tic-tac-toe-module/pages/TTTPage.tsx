import Player from "../components/Player.tsx";
import classes from "./TTTPage.module.css";

export default function TTTPage() {

    return (
        <main>
            <div id="game-container" className={classes.gameContainer}>
                <ol id="players" className={classes.players}>
                    <Player name="Rian" symbol="X"/>
                    <Player name="Amar" symbol="X"/>
                </ol>
            </div>
        </main>

    );
}