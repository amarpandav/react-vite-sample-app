import {Await, useLoaderData} from "react-router-dom";
import {EventDto} from "../models/event/EventDto.ts";
import EventsList from "../components/Event/EventsList.tsx";
import {Suspense} from "react";
//Same page like EventsPage with difference data fetch is deferred, meaning we do not wait for data to load to display the page.
export default function EventsPageWithSuspenseAndAwait() {
    const {events} = useLoaderData(); //coming from loader

    return (
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading using Suspense & Await</p>}>
            <Await resolve={events}>
                {(loadedEvents: EventDto[]) => <EventsList events={loadedEvents}/>}
            </Await>
        </Suspense>
    );
}

async function loadEvents() {

    //await and then are not same, slight difference (see sample 11).
    //await is preferred
    /*
    * Await:
    * await pauses execution until the promise resolves.
    * It makes asynchronous code look synchronous, improving readability.
    * It can only be used inside an async function.
    *
    * .then():
    * .then() is a method on promises that allows chaining.
    *  It does not pause execution but schedules the next step when the previous promise resolves.
    *  Works in non-async functions.
    * */
    return fetch('http://localhost:8080/events')
        .then((response: Response) => {
            if (!response.ok) {
                throw new Error('Fetching events failed.');
            }
            return response.json();
        })
        .then((resData) => {
            const eventsJson = resData.events;
            return Promise.resolve(EventDto.parseJsonArray(eventsJson));
        })
}

export async function loader() {
    return {
        events: loadEvents()
    };

    //const id = prams.eventId;
    //You can also use await here. This means wait for loadEvents to finish loading routing to this page
    //whereas loadEvents() will be loaded after moving to this page.
    /*return {
        // event: await loadEvent(id),
        events:   loadEvents()
    };*/
}


/*
import {Await, useLoaderData} from "react-router-dom";
import {EventDto} from "../event/EventDto.ts";
import EventsList from "../event/EventsList.tsx";
import {Suspense} from "react";
//Same page like EventsPage with difference data fetch is deferred, meaning we do not wait for data to load to display the page.
export default function EventsPageWithDeferDataFetch() {
    //const events = useLoaderData() as Promise<EventDto[]>; //coming from loader

    const {events} = useLoaderData();
    //const eventsJson = resData.events;
    const eventsDto=  EventDto.parseJsonArray(events);

    return (
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading using Suspense & Await</p>}>
            <Await resolve={eventsDto}>
                {(loadedEvents: EventDto[]) => <EventsList events={loadedEvents}/>}
            </Await>
        </Suspense>
    );
}

export function loader() {
    return fetch('http://localhost:8080/events')
        .then((response: Response) => {
            if (!response.ok) {
                throw new Error('Fetching events failed.');
            }
            return response.json();
        })

}


* */

