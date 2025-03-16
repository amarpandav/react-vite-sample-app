import {
    ActionFunctionArgs,
    Link,
    LoaderFunctionArgs,
    redirect, /*useLoaderData,*/
    useRouteLoaderData, /*useParams*/
} from "react-router-dom";
import {EventDto} from "../event/Event.model.ts";
//import {DateUtils} from "../../utils/DateUtils.ts";
import EventItem from "../eventItem/EventItem.tsx";
import {throwError} from "../../home-module/error/RouteErrorPage.tsx";
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
        await throwError('Viewing Event Details failed (method: EventDetailsPage.loader).', response);
    }
}

export async function action({params, request}: ActionFunctionArgs) {
    const eventId = params.eventId
    const response = await fetch('http://localhost:8080/events/' + eventId, {
        /*method: 'DELETE',*/
        method: request.method /*coming from EventItem useSubmit()*/,
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return redirect("/events-module/events");
    } else {
        //optional error handling. mostly we will have a toaster message or a modal to show the error.
        await throwError('Deleting Event failed (method: EventDetailsPage.action).', response);
    }

}