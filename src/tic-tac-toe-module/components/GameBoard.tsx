import classes from "../pages/TTTPage.module.css";
import {useState} from "react";

interface Props {
    //callback: React.RefCallback<string>; no need to return activePlayerSymbol as its actually coming from TTTPage itself
    callback:  () => void;
    activePlayerSymbol: string;
}
export default function GameBoard( {callback, activePlayerSymbol}: Props) {

    const initialGameBoard: (null | string)[][] = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];

    const [gameBoard, setGameBoard] = useState(initialGameBoard);


    function handleSelectSquare(rowIndex: number, colIndex: number) {
        setGameBoard( (currentGameBoard) => {
            const newGameBoard = [...currentGameBoard].map( (innerArray) => [...innerArray]);
            newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return newGameBoard;
        });

        callback();
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
