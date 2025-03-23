import {TurnDto} from "../pages/TurnDto.ts";

interface Props {
    turns: TurnDto[];

}

export default function Log({turns}: Props) {
//console.log(turns)

    return (
       <ol id="log">
           {
               /*turns.map( (turn: TurnDto) => {
                    <li key={`${turn.square.rowIndex}${turn.square.colIndex}`}>Player </li>
               })*/
                turns.map( (turn: TurnDto) => (
                    //JS template literal syntax: `${turn.square.rowIndex}${turn.square.colIndex}` to dynamically construct a string
                     <li key={`${turn.square.rowIndex}${turn.square.colIndex}`}>Player {turn.activePlayerSymbol} played at row {turn.square.rowIndex} and column {turn.square.colIndex}</li>
                ))
           }
       </ol>
    );
}
