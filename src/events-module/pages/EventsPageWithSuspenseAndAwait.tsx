import {Await, useLoaderData} from "react-router-dom";
import {EventDto} from "../event/Event.model.ts";
import EventsList from "../event/EventsList.tsx";
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

export function loader() {
    return {events: loadEvents()};
}


/*
import {Await, useLoaderData} from "react-router-dom";
import {EventDto} from "../event/Event.model.ts";
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

