import {
    Form,
    HTMLFormMethod,
    LoaderFunctionArgs,
    redirect,
    useActionData,
    useNavigate,
    useNavigation
} from 'react-router-dom';

import classes from './EventForm.module.css';
import {EventDto} from "../event/Event.model.ts";
import {DateUtils} from "../../utils/DateUtils.ts";
import {throwError} from "../../home-module/error/RouteErrorPage.tsx";

//import {EventDto} from "../event/Event.model.ts";


interface Props {
    method: HTMLFormMethod,
    eventDto?: EventDto;
}

export default function EventForm({method, eventDto}: Props) {
    const navigate = useNavigate();

    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    const actionData = useActionData() as Record<string, string>;

    function cancelHandler() {
        navigate('..');
    }

    return (
        <Form method={method}/*method='post'*/ /*action='any-other-action-than-currently-active-route-optional'*/ className={classes.form}>
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

/**
 * New need to create 2 action methods as edit and new event api looks almost identical.
 * @param request
 * @param params
 */
export async function action({request, params}: LoaderFunctionArgs) {

    const method = request.method;
    const eventId = params.eventId

    const data = await request.formData()

    //works but ts error - const eventAsJson = EventDto.toJson(data.get('title'), data.get('eventDate'), data.get('image'), data.get('description'));
    const eventAsJson = EventDto.toJson(data.get('title') as string, data.get('eventDate') as string, data.get('image') as string, data.get('description') as string);

    //console.log(JSON.stringify(eventAsJson));

    let url = "http://localhost:8080/events";
    if(method === 'PATCH') {
        url = url + '/' +eventId
    }
    const response = await fetch(url/*'http://localhost:8080/events/'+eventId*/, {
        method: method/*'PATCH', 'POST'*/,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventAsJson),
    });

    /*
    * calling response.json() multiple times would cause error Failed to execute 'json' on 'Response': body stream already read
    * But we are calling  response.json() only once. No... we are returning response in case of 422 which will read response.
    * we can't read response multiple time.
    * */
    //console.log("EventForm.action.response: ",response.json());

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    if(response.status == 422){
        return response;
    } else if(!response.ok){
        let operation = "New";
        if(method === 'PATCH') {
            operation = "Edit"
        }
        //optional error handling. mostly we will have a toaster message or a modal to show the error.
        await throwError(operation+' event failed (method: EventForm.action).', response);
    }

    return redirect("/events-module/events");
}