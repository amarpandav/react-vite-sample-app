import classes from "../pages/TTTPage.module.css";

export default function GameBoard() {

    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];

    return (
        <ol id="game-board" className={classes.gameBoard}>
            {initialGameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {
                            row.map( (col, colIndex) => (
                                <li key={colIndex}>
                                    <button>{col}</button>
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
