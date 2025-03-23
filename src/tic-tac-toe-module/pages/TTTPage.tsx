import Player from "../components/Player.tsx";
import classes from "./TTTPage.module.css";
//import PlayerTemp from "../components/PlayerTemp.tsx";
import GameBoard from "../components/GameBoard.tsx";
import {/*useMemo, */useState} from "react";
import Log from "../components/Log.tsx";
import {SquareDto, TurnDto} from "./TurnDto.ts";

export default function TTTPage() {

    const [turns, setTurns] = useState<TurnDto[]>([]);

    //const [activePlayerSymbol, setActivePlayerSymbol] = useState('X'); no need to store activePlayerSymbol, recalculating it using useMemo.turns
    //Option 1: use useMemo to calculate activePlayerSymbol
    /*const activePlayerSymbol = useMemo( () => {
        if (turns.length === 0) {
            return 'X';
        }
        return turns[0].activePlayerSymbol === 'X' ? 'O' : 'X';
    }, [turns]);*/

    //Option 2: create a function to calculate activePlayerSymbol
    const deriveActivePlayerSymbol = (gameTurns: TurnDto[]) => {
        let activePlayerSymbol = 'X';
        if (gameTurns.length > 0 && gameTurns[0].activePlayerSymbol === 'X') {
            activePlayerSymbol = 'O'
        }
        return activePlayerSymbol;
    }

    function handleSelectSquare(rowIndex: number, colIndex: number) {
        //step 1. toggle the active player symbol
        //setActivePlayerSymbol((activePlayerSym) => activePlayerSym == 'X' ? 'O' : 'X');

        //step 2. update the game board (i.e. turns)
        //Don't merge states. Always replace them.
        //States are immutable, so we can't merge them. We can only replace them.
        //setTurns( (prevTunrs/*: {activePlayerSymbol: string, square: {rowIndex: number, colIndex: number}}[]*/) => {
        setTurns((prevTunrs: TurnDto[]) => {
            const activePlayerSymbol = deriveActivePlayerSymbol(prevTunrs);
            //activePlayerSymbol would have current active player however if we use that then we are merging two states here.
            //We know react is hacky, it will batch the state updates and then apply them. So, we can't rely on the activePlayerSymbol.
            //Hence redo the logic to get the active player symbol
            /*no need to duplicate the logic: instead use useMemo.
            let activePlayerSymbol2 = 'X';

            if (prevTunrs.length > 0 && prevTunrs[0].activePlayerSymbol === 'X') {
                activePlayerSymbol2 = 'O'
            }*/

            //const updatedTurns = [{activePlayerSymbol:activePlayerSymbol2, square: {rowIndex: rowIndex, colIndex: colIndex}},...turns];
            //const turnDto = new TurnDto(activePlayerSymbol2, new SquareDto(rowIndex, colIndex));
            const turnDto = new TurnDto(activePlayerSymbol, new SquareDto(rowIndex, colIndex));
            const updatedTurns = [turnDto, ...turns];
            return updatedTurns;
        })
        //window.alert(activePlayerSymbol);
    }

    return (
        <>
            <div id="game-container" className={classes.gameContainer}>
                <ol id="players" className={`${classes.players} ${classes.highlightPlayer}`}>
                    {/*
                    <Player initialPlayerName="Rian" playerSymbol="X" isActive={activePlayerSymbol === 'X'}/>
                    <Player initialPlayerName="Amar" playerSymbol="O" isActive={activePlayerSymbol === 'O'}/>
                    */}

                    <Player initialPlayerName="Rian" playerSymbol="X" isActive={deriveActivePlayerSymbol(turns) === 'X'}/>
                    <Player initialPlayerName="Amar" playerSymbol="O" isActive={deriveActivePlayerSymbol(turns) === 'O'}/>
                    {/*<PlayerTemp />*/}
                </ol>
                <GameBoard callback={handleSelectSquare} turns={turns}/>
            </div>
            <Log turns={turns}></Log>

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