import {Link, LoaderFunctionArgs, /*useLoaderData,*/ useRouteLoaderData, /*useParams*/} from "react-router-dom";
import {EventDto} from "../event/Event.model.ts";
//import {DateUtils} from "../../utils/DateUtils.ts";
import EventItem from "../eventItem/EventItem.tsx";
//import {ErrorDto} from "../../components/ErrorPage/Error.tsx";

/*
* loader() is getting called before the page starts rendering, so data fetch can start as early as possible.
* Secondly how to get the data loaded by loader() into this page?
* loader() returns the response and useLoaderData() retrieves it as is in json format.
* All good so far but what if other page also needs the same data? We can't call loader() again as it will make another call to backend.
* Hence we use nested routing in App.tsx and useRouteLoaderData() will get the data from loader() and we can use it in multiple pages.
*/
export default function EventDetailsPage() {
    //const params = useParams();; no need to use useParams() as we are getting the data from loader() using useLoaderData()
    //const eventJson = useLoaderData().event; //why its event? because backend is sending event as key in json (p.s. events.js)
    const eventJson = useRouteLoaderData('event-detail-id').event;

    const eventDto: EventDto = EventDto.parseJson(eventJson);
    return (
        <>
            <h3>Event Details Page</h3>

            <EventItem eventDto={eventDto}/>

            <Link to=".." relative="path">Back to List</Link>
        </>
    );
}

export async function loader({request, params}: LoaderFunctionArgs) {
    const eventId = params.eventId
    const response = await fetch('http://localhost:8080/events/' + eventId);

    console.log(request);

    if (response.ok) {
        return response;
    } else {
        //optional error handling. mostly we will have a toaster message or a modal to show the error.
        try {
            const errorDetails = await response.json();
            console.log("error in EventDetailsPage.loader.try is: "+errorDetails);

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
            console.log("error in EventDetailsPage.loader.catch is: "+error);

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