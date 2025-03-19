import classes from "../pages/TTTPage.module.css";

interface Props {
    name: string;
    symbol: string;
}

export default function Player({name, symbol}: Props) {

    return (
       <li>
           <span className={classes.player}>
               <span className={classes.playerName}>{name}</span>
               <span className={classes.playerSymbol}>{symbol}</span>
           </span>
           <button>Edit</button>
       </li>
    );
}
