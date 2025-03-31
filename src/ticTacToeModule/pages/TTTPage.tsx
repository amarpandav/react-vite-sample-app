import Player from "../components/Player.tsx";
import classes from "./TTTPage.module.css";
//import PlayerTemp from "../components/PlayerTemp.tsx";
import GameBoard from "../components/GameBoard.tsx";
import {useState} from "react";
import Log from "../components/Log.tsx";
import {SquareDto, TurnDto} from "./TurnDto.ts";
import GameOver from "../components/GameOver.tsx";


//Anything outside this function will be shared across all instances of this component hence its a bad practice to keep initialGameBoard outside this
//component
const initialGameBoard: (null | string)[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export interface PlayerDto {
    symbol: string;
    name: string;
}
export default function TTTPage() {

    const [players, setPlayers] = useState<PlayerDto[]>([{
        symbol: 'X',
        name: 'Rian'
    }, {
        symbol: 'O',
        name: 'Amar'
    }]);

    const [turnsLog, setTurnsLog] = useState<TurnDto[]>([]);
    const [winner, setWinner] = useState<string | undefined>();

    let hasDraw = !winner && turnsLog.length === 9;

    const [gameBoard, setGameBoard] = useState<(null | string)[][]>([...initialGameBoard].map(innerArray => [...innerArray]));

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

    /*const calculateIfWeHaveAWinner = () => {
        //iterate over the game board and check if there is a winner
        turns.forEach( (turn: TurnDto) => {
            turn.
        })
    }*/

    function handleRestart() {
        setTurnsLog([]);
        setGameBoard([...initialGameBoard].map(innerArray => [...innerArray]));
        setWinner(undefined);
        hasDraw = false;
    }

    const deriveWinner = () => {
        let square1;
        let square2;
        let square3;

        let player;
        //step 1: check horizontal and vertical winning combinations
        ['X', 'O'].forEach((playerSymbol: string) => {
            if (winner) return;
            [0, 1, 2].forEach((index: number) => {
                if (winner) return;
                //row wise comparison
                square1 = gameBoard[index][0];
                square2 = gameBoard[index][1];
                square3 = gameBoard[index][2];
                if (playerSymbol === square1 && playerSymbol === square2 && playerSymbol === square3) {
                    player = players.find( (player) => player.symbol === playerSymbol);
                    if(player) {setWinner(player.name)};
                    return;  // Exit the current loop
                }

                //col wise comparison
                square1 = gameBoard[0][index];
                square2 = gameBoard[1][index];
                square3 = gameBoard[2][index];
                if (playerSymbol === square1 && playerSymbol === square2 && playerSymbol === square3) {
                    player = players.find( (player) => player.symbol === playerSymbol);
                    if(player) {setWinner(player.name)};
                    return;  // Exit the current loop
                }
            });
        });

        //step 2: check diagonal winning combinations
        ['X', 'O'].forEach((playerSymbol: string) => {
            if (winner) return;
            square1 = gameBoard[0][0];
            square2 = gameBoard[1][1];
            square3 = gameBoard[2][2];
            if (playerSymbol === square1 && playerSymbol === square2 && playerSymbol === square3) {
                player = players.find( (player) => player.symbol === playerSymbol);
                if(player) {setWinner(player.name)};
                return;  // Exit the current loop
            }

            square1 = gameBoard[0][2];
            square2 = gameBoard[1][1];
            square3 = gameBoard[2][0];
            if (playerSymbol === square1 && playerSymbol === square2 && playerSymbol === square3) {
                player = players.find( (player) => player.symbol === playerSymbol);
                if(player) {setWinner(player.name)};
                return;  // Exit the current loop
            }
        });

        //console.log("winner is: "+ winner);

    }

    function handleSelectSquare(rowIndex: number, colIndex: number) {
        //console.log(gameBoard);
        //step 1. toggle the active player symbol
        //setActivePlayerSymbol((activePlayerSym) => activePlayerSym == 'X' ? 'O' : 'X');

        //step 2. update the game board (i.e. turns)
        //Don't merge states. Always replace them.
        //States are immutable, so we can't merge them. We can only replace them.
        //setTurns( (prevTunrs/*: {activePlayerSymbol: string, square: {rowIndex: number, colIndex: number}}[]*/) => {
        setTurnsLog((prevTurns: TurnDto[]) => {
            const activePlayerSymbol = deriveActivePlayerSymbol(prevTurns);
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
            const updatedTurns = [turnDto, ...turnsLog];
            return updatedTurns;
        })
        //window.alert(activePlayerSymbol);

        //Step 3: Update the game board based on the turns
        gameBoard[rowIndex][colIndex] = deriveActivePlayerSymbol(turnsLog);

        deriveWinner();

    }

    function handleNameChange(newPlayer: PlayerDto) {
        setPlayers( (players) => {
            return players.map( (player) => {
                if(player.symbol === newPlayer.symbol) {
                    player.name = newPlayer.name;
                }
                return player;
            })
        })
       /* const player: PlayerDto | undefined = players.find( (player) => player.symbol === newPlayer.symbol);
        if(player) {
            player.name = newPlayer.name;
            //setPlayers([...players, player]);
        }*/
    }

    return (
        <>
            <div id="game-container" className={classes.gameContainer}>
                <ol id="players" className={`${classes.players} ${classes.highlightPlayer}`}>
                    {
                        players.map( (player) => (
                            <Player playerDto={player} key={player.symbol}
                                    isActive={deriveActivePlayerSymbol(turnsLog) === player.symbol}
                                    handleNameChangeCallback={handleNameChange}/>
                        ))

                        /*
                        * <Player initialPlayerName="Rian" playerSymbol="X"
                            isActive={deriveActivePlayerSymbol(turnsLog) === 'X'}/>
                          <Player initialPlayerName="Amar" playerSymbol="O"
                            isActive={deriveActivePlayerSymbol(turnsLog) === 'O'}/>
                        * */
                    }



                    {/*<PlayerTemp />*/}
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} callback={handleRestart}></GameOver>}
                <GameBoard callback={handleSelectSquare} gameBoard={gameBoard} winner={winner}/>
            </div>
            <Log turns={turnsLog}></Log>

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
