//Limitation: Looks like these styles are applied only to this component, but its not, its applied globally:(
import "./CoreConcept.css";

interface Props{
    image: string;
    title: string;
    description: string;

}

export default function CoreConcept(props: Props) {

    return (
        <li>
            <img src={props.image} alt={props.title}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )

}