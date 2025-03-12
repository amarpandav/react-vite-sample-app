import {useNavigate} from 'react-router-dom';

import classes from './EventForm.module.css';
import {EventDto} from "../event/Event.model.ts";
import {DateUtils} from "../../utils/DateUtils.ts";
//import {EventDto} from "../event/Event.model.ts";



interface Props {
    eventDto?: EventDto;
}
function EventForm({ eventDto}: Props) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required value={eventDto ? eventDto.title : ''}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required value={eventDto ? eventDto.image : ''}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required value={eventDto ? DateUtils.formatISODate(eventDto.eventDate) : ''}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows={5} required value={eventDto ? eventDto.description : ''}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default EventForm;
