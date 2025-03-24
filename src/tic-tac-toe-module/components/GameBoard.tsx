import classes from "../pages/TTTPage.module.css";
//import {useState} from "react";

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



interface Props {
    //callback:  () => void;
    callback:  (rowIndex: number, colIndex: number) => void;
    gameBoard: (string | null)[][];
    winner: string | undefined;
    /*activePlayerSymbol: string;*/
}
export default function GameBoard( {callback/*, activePlayerSymbol*/, gameBoard, winner}: Props) {



    /*const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex: number, colIndex: number) {
        setGameBoard( (currentGameBoard) => {
            const newGameBoard = [...currentGameBoard].map( (innerArray) => [...innerArray]);
            newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return newGameBoard;
        });

        callback();
    }*/

    return (<> <div hidden={winner == undefined} style={{color: 'green', fontSize: '40px'}}>Congratulation {winner} won the game!!</div>
        <ol id="game-board" className={classes.gameBoard}>

            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {
                            row.map( (col, colIndex) => (
                                <li key={colIndex}>
                                    {/*col is player symbol, remember??*/}
                                    <button disabled={col != undefined || winner != undefined}/*disabled={gameBoard[rowIndex][colIndex] != undefined}*/  onClick={ ()=> callback(rowIndex, colIndex)/*handleSelectSquare(rowIndex, colIndex)*/}>{col}</button>
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
        </ol></>
    );
}
