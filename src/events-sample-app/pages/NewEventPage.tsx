import EventForm from "../eventForm/EventForm.tsx";
import {Link, LoaderFunctionArgs, redirect} from "react-router-dom";
import {EventDto} from "../event/Event.model.ts";
import {throwError} from "../../components/errorPage/RouteErrorPage.tsx";

export default function NewEventPage() {
    return (
        <>
            <EventForm></EventForm>
            <Link to=".." relative="path">Back to Events</Link>
        </>
    );
}

export async function action({request, params}: LoaderFunctionArgs) {
    const data = await request.formData()
    const eventAsJson = EventDto.toJson(data.get('title'), data.get('eventDate'), data.get('image'), data.get('description'));

    //console.log(JSON.stringify(eventAsJson));
    const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //body: JSON.stringify(eventAsJson),

        //to test invalid data so that backend throws errors and status code 422
        body: null,
    });

    console.log("NewEventPage.action.response: ",response.json());
    if (response.ok) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return redirect("/events-module/events");
    } else {
        //optional error handling. mostly we will have a toaster message or a modal to show the error.
        await throwError('Creating new event failed (method: NewEventPage.action).', response);
    }
}