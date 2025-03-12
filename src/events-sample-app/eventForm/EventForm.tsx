import {Form, useActionData, useNavigate, useNavigation} from 'react-router-dom';

import classes from './EventForm.module.css';
import {EventDto} from "../event/Event.model.ts";
import {DateUtils} from "../../utils/DateUtils.ts";

//import {EventDto} from "../event/Event.model.ts";


interface Props {
    eventDto?: EventDto;
}

function EventForm({eventDto}: Props) {
    const navigate = useNavigate();

    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    const actionData = useActionData() as Record<string, string>;

    function cancelHandler() {
        navigate('..');
    }

    return (
        <Form method='post' /*action='any-other-action-than-currently-active-route-optional'*/ className={classes.form}>
            {actionData && actionData.errors && <ul>
                {Object.values(actionData.errors).map((err) => (
                    <li key={err}>{err}</li>
                ))}
            </ul>}
            <p>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title" required
                       defaultValue={eventDto ? eventDto.title : 'test title'}/>
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" name="image" required
                       defaultValue={eventDto ? eventDto.image : 'https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg'}/>
            </p>
            <p>
                <label htmlFor="date">Date</label>
                {/*Data is not displayed + selected date from picker throws format error
            <input id="date" type="date" name="eventDate" required defaultValue='2005-05-05'/>

            An <input type="date"> expects the date in the YYYY-MM-DD format (ISO format), but you're passing a formatted string like dd.MM.yyyy, which is not valid for the date input type.
            <input id="date" type="date" name="eventDate" required defaultValue={eventDto ? DateUtils.formatDateToSwiss(eventDto.eventDate) : '15.05.2024'}/>
          */}
                <input id="date" type="date" name="eventDate" required
                       defaultValue={eventDto ? DateUtils.formatToISODate(eventDto.eventDate) : '2024-05-15'}/>
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" rows={5} required
                          defaultValue={eventDto ? eventDto.description : 'test desc'}/>
            </p>
            <div className={classes.actions}>
                <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
                    Cancel
                </button>
                <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
            </div>
        </Form>
    );
}

export default EventForm;
