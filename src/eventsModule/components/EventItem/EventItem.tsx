import classes from './EventItem.module.css';
import {Link, useSubmit} from "react-router-dom";
import {EventDto} from "../../models/event/EventDto.ts";
import {formatToSwissDate} from "../../../utils/dateUtils.ts";

//import {EventDto} from "../event/EventDto.ts";

interface Props {
    eventDto: EventDto
}

export default function EventItem({eventDto}: Props) {

    const submit = useSubmit();

    function startDeleteHandler() {
        const isSure = window.confirm('Do you really want to delete this event?');
        if (isSure) {
            console.log('Deleting event...');
            submit(null, {method: 'DELETE'/*, action:'some-other-action-than-currently-active-route-optional'*/});
        }
    }

    return (
        <article className={classes.event}>
            <img src={eventDto.image} alt={eventDto.title}/>
            <h1>{eventDto.title}</h1>
            <time>{formatToSwissDate(eventDto.eventDate)}</time>
            <p>{eventDto.description}</p>
            <menu className={classes.actions}>
                <Link to="edit">Edit</Link>
                <button onClick={startDeleteHandler}>Delete</button>
            </menu>
        </article>
    );
}
