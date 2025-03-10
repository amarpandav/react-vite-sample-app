import { useNavigate } from 'react-router-dom';

import classes from './EventForm.module.css';
import {EventDto} from "../event/Event.model.ts";


/*
* Use case we are trying to solve:
* How to get data from the previous page to this page?
* On EventItem we have eventDto, how to pass it to EventForm?
*
*/
//we can also pass the eventDto here from EventDetailsPage but there is a better way using netsted routing inside App.tsx and userLoaderData().
//We moved loader() from EventDetailsPage.tsx to newly created parent node (having no element) and now we can use useLoaderData() to get the data into 2 pages
//EventDetailsPage and EventForm
interface Props {
    method: 'create' | 'update';
    eventDto: EventDto;
}
function EventForm(/*{ method, eventDto}: Props*/) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required />
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
