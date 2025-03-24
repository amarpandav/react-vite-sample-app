import classes from "../pages/TTTPage.module.css";
interface Props {
    winner: string | undefined;

}

export default function GameOver({winner}: Props) {
    return (
       <div id="game-over" className={classes.gameOver}>
           <h2>Gamer Over!</h2>
           <p>{winner} won!</p>
           <p><button>Rematch!</button></p>
       </div>
    );
}
