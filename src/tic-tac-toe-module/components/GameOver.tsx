import classes from "../pages/TTTPage.module.css";
interface Props {
    winner: string | undefined;

}

export default function GameOver({winner}: Props) {
    return (
       <div id="game-over" className={classes.gameOver}>
           <h2>Gamer Over!</h2>
           {winner && <p>{winner} won!</p>}
           {!winner && <p>It's a draw!</p>}
           <p><button>Rematch!</button></p>
       </div>
    );
}
