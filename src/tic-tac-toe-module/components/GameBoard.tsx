import classes from "../pages/TTTPage.module.css";
import {useState} from "react";

export default function GameBoard() {

    const initialGameBoard: (null | string)[][] = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];

    const [gameBoard, setGameBoard] = useState(initialGameBoard);


    function handleSelectSquare(rowIndex: number, colIndex: number) {
        setGameBoard( (prevGameBoard) => {
            const newGameBoard = [...prevGameBoard].map( (innerArray) => [...innerArray]);
            newGameBoard[rowIndex][colIndex] = 'X';
            return newGameBoard;
        });
    }

    return (
        <ol id="game-board" className={classes.gameBoard}>
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {
                            row.map( (col, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={ ()=> handleSelectSquare(rowIndex, colIndex)}>{col}</button>
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
