import Player from "../components/Player.tsx";
import classes from "./TTTPage.module.css";
import PlayerTemp from "../components/PlayerTemp.tsx";
import GameBoard from "../components/GameBoard.tsx";

export default function TTTPage() {

    return (
        <main>
            <div id="game-container" className={classes.gameContainer}>
                <ol id="players" className={classes.players}>
                    <Player initialPlayerName="Rian" playerSymbol="X"/>
                    <Player initialPlayerName="Amar" playerSymbol="0"/>

                    <PlayerTemp />
                </ol>
               <GameBoard />
            </div>
        </main>

    );
}