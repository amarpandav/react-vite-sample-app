import EventForm from "../eventForm/EventForm.tsx";
import {Link, LoaderFunctionArgs, useRouteLoaderData} from "react-router-dom";
import {EventDto} from "../event/Event.model.ts";
import {throwError} from "../../components/errorPage/RouteErrorPage.tsx";

/*
* Use case we are trying to solve:
* How to get data from the previous page to this page?
* On EventDetailsPage we have eventDto, how to pass it to EditEventPage?*
*
* we can also pass the eventDto here from EventDetailsPage but there is a better way using nested routing inside App.tsx and userLoaderData().
* We moved loader() from EventDetailsPage.tsx to newly created parent node (having no element) and now we can use useRouteLoaderData() to get the data into 2 pages
* EventDetailsPage and EventForm. EventDetailsPage.loader() will be executed twice. Once for EventDetailsPage and once for EventForm.
*
*/

export default function EditEventPage() {
    const eventJson = useRouteLoaderData('event-detail-id').event; //why its .event? because backend is sending event as key in json (p.s. events.js)
    const eventDto: EventDto = EventDto.parseJson(eventJson);

    return (
        <>
            <h3>Event Mgmt - Edit Event Page</h3>
            <EventForm eventDto={eventDto}/>
            <Link to=".." relative="path">Back to Details</Link>
        </>
    );
}


export async function action({request, params}: LoaderFunctionArgs) {

    const eventId = params.eventId

    const data = await request.formData()
    const eventAsJson = EventDto.toJson(data.get('title'), data.get('eventDate'), data.get('image'), data.get('description'));

    console.log(JSON.stringify(eventAsJson));
    const response = await fetch('http://localhost:8080/events/'+eventId, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventAsJson),
    });

    if (response.ok) {

    } else {
        //optional error handling. mostly we will have a toaster message or a modal to show the error.
        await throwError('Editing event failed (method: EditEventPage.action).', response);
    }
}