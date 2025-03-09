import {Link, LoaderFunctionArgs, useLoaderData, /*useParams*/} from "react-router-dom";
import {EventDto} from "../event/Event.model.ts";
import {DateUtils} from "../../utils/DateUtils.ts";
//import {ErrorDto} from "../../components/ErrorPage/Error.tsx";

export default function EventDetailsPage() {
    //const params = useParams();
    const eventJson = useLoaderData().event;
    const event: EventDto = EventDto.parseJson(eventJson);
    return (
        <>
            <h3>Event Details Page</h3>

            <p>Event Id: {event.eventId.id}</p>
            <p>Event title: {event.title}</p>
            <p>Event Date: {DateUtils.formatISODate(event.eventDate)}</p>

            <Link to=".." relative="path">Back2</Link>
        </>
    );
}

export async function loader({request, params}: LoaderFunctionArgs) {
    const eventId = params.eventId
    const response = await fetch('http://localhost:8080/events1/' + eventId);

    console.log(request);

    if (response.ok) {
        return response;
    } else {
        try {
            const errorDetails = await response.json();
            let stack = errorDetails.message;
            if(errorDetails.stack) {
                stack = stack + errorDetails.stack;
            }
            //console.log("stack in loader is:"+stack );
            //console.log(); if available
            throw Response.json(
                {message: 'Fetching event details for event id ' + eventId + ' failed.', stack: stack},
                {status: response.status},
            );
        }catch (error) {
            // If JSON parsing fails (e.g., HTML error page is returned), fall back to raw text
            //const stack = await response.text();  // Get the raw HTML or text
            //throw new Error(`Failed to fetch event details. Error: ${errorMessage}`);

            //No idea why we get : SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
            console.log("error in EventDetailsPage.loader is: "+error);

            /*
            This is not working. in Error.tsx, everything is empty
            const stack = response.url + " "+response.statusText + " "+error;
            throw Response.json( new ErrorDto(response.status, 'Fetching event details for event id ' + eventId + ' failed.', stack), {status: response.status});
                //{message: 'Fetching event details for event id ' + eventId + ' failed.', stack: stack},
                //{status: response.status},
                */

            const stack = response.url + " "+response.statusText+ ". "+error;
            throw Response.json(
                {message: 'Fetching event details for event id ' + eventId + ' failed.', stack: stack},
                {status: response.status},
            );

        }

    }
}