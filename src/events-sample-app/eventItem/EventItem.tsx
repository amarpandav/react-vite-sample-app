import classes from './EventItem.module.css';
import {Link} from "react-router-dom";
import {EventDto} from "../event/Event.model.ts";
import {DateUtils} from "../../utils/DateUtils.ts";
//import {EventDto} from "../event/Event.model.ts";

interface Props {
    eventDto: EventDto
}
export default function EventItem({ eventDto}: Props) {
  function startDeleteHandler() {
    // ...
  }

  return (
    <article className={classes.event}>
      <img src={eventDto.image} alt={eventDto.title} />
      <h1>{eventDto.title}</h1>
      <time>{DateUtils.formatToSwissDate(eventDto.eventDate)}</time>
      <p>{eventDto.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}
