interface Props {
    name: string;
    symbol: string;
}

export default function Player({name, symbol}: Props) {

    return (
       <li>
           <span className="player">
               <span className="player-name">{name}</span>
               <span className="player-symbol">{symbol}</span>
           </span>
           <button>Edit</button>
       </li>
    );
}
