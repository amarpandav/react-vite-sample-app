import classes from "../pages/TTTPage.module.css";
//import {useState} from "react";
import {TurnDto} from "../pages/TurnDto.ts";

//React.RefCallback<string> is needed when you need to refer to a DOM element
/*for e.g.
function ExampleComponent() {
    const divRefCallback: React.RefCallback<HTMLDivElement> = (element) => {
        if (element) {
            console.log("Div reference set:", element);
        }
    };

    return <div ref={divRefCallback}>Hello, Ref Callback!</div>;
}
 */

const initialGameBoard: (null | string)[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


interface Props {
    //callback:  () => void;
    callback:  (rowIndex: number, colIndex: number) => void;
    turns: TurnDto[];
    /*activePlayerSymbol: string;*/
}
export default function GameBoard( {callback/*, activePlayerSymbol*/, turns}: Props) {

    //Step 1: Create a game board from initialGameBoard
    const gameBoard = initialGameBoard;

    //Step 2: Update the game board based on the turns
    turns.forEach( (turn) => {
        gameBoard[turn.square.rowIndex][turn.square.colIndex] = turn.activePlayerSymbol;
    });

    /*const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex: number, colIndex: number) {
        setGameBoard( (currentGameBoard) => {
            const newGameBoard = [...currentGameBoard].map( (innerArray) => [...innerArray]);
            newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return newGameBoard;
        });

        callback();
    }*/

    return (
        <ol id="game-board" className={classes.gameBoard}>
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {
                            row.map( (col, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={ ()=> callback(rowIndex, colIndex)/*handleSelectSquare(rowIndex, colIndex)*/}>{col}</button>
                                    {/*col is player sombol*/}
                                </li>
                            ))
                        }
                    </ol>
                </li>
            ))}
            <li>
                <ol>
                    <li></li>
                </ol>
            </li>
        </ol>
    );
}
