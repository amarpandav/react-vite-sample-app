import {Form, useNavigate} from 'react-router-dom';

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
    <Form method='post' className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={eventDto ? eventDto.title : 'test title'}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={eventDto ? eventDto.image : 'https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg'}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
          {/*Data is not displayed + selected date from picker throws format error */}
        <input id="date" type="date" name="date" required defaultValue={eventDto ? DateUtils.formatISODate(eventDto.eventDate) : '15.05.2024'}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows={5} required defaultValue={eventDto ? eventDto.description : 'test desc'}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;
