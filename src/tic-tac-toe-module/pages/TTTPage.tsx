import Player from "../components/Player.tsx";
import classes from "./TTTPage.module.css";
import PlayerTemp from "../components/PlayerTemp.tsx";
import GameBoard from "../components/GameBoard.tsx";
import {useState} from "react";

export default function TTTPage() {

    const [activePlayerSymbol, setActivePlayerSymbol] = useState('X');

    function toggleActivePlayer() {
        //toggle the active player symbol
        setActivePlayerSymbol( (activePlayerSym) => activePlayerSym == 'X' ? 'O' : 'X');

        //window.alert(activePlayerSymbol);
    }

    return (
        <>
            <div id="game-container" className={classes.gameContainer}>
                <ol id="players" className={`${classes.players} ${classes.highlightPlayer}`}>
                    <Player initialPlayerName="Rian" playerSymbol="X" isActive={activePlayerSymbol === 'X'}/>
                    <Player initialPlayerName="Amar" playerSymbol="O" isActive={activePlayerSymbol === 'O'}/>

                    <PlayerTemp />
                </ol>
               <GameBoard callback={toggleActivePlayer} activePlayerSymbol={activePlayerSymbol}/>
            </div>

            {/*<div className={classes.amarContainer}>
                <div>Amar's playground (we need 3x4 grid. we can start with 3 rows then add 4 columns)</div>
                <ol className={classes.amarBoardGame}>
                    <li>
                        <ol>
                            <li>col1</li>
                            <li>col1</li>
                            <li>col1</li>
                        </ol>
                    </li>
                    <li>
                        <ol>
                            <li>col2</li>
                            <li>col2</li>
                            <li>col2</li>
                        </ol>
                    </li>
                    <li>
                        <ol>
                            <li>col3</li>
                            <li>col3</li>
                            <li>col3</li>
                        </ol>
                    </li>
                </ol>
            </div>*/}

        </>

    );
}