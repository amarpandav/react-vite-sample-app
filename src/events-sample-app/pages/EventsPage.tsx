import {useEffect, useState} from 'react';
import EventsList from "../Event/EventsList.tsx";
import {EventDto} from "../Event/Event.model.ts";
import {convertToDate} from "../utils/dateUtils.ts";

//import EventsList from '../components/EventsList';

export default function EventsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedEvents, setFetchedEvents] = useState<EventDto[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchEvents() {
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/events');

            if (!response.ok) {
                setError('Fetching events failed.');
            } else {
                const resData = await response.json();
                const events = resData.events;
                events.map((event   ) => {
                    if(event.eventDate) {
                        event.eventDate = convertToDate(event.eventDate);
                    }

                } );

                setFetchedEvents(events);
            }
            setIsLoading(false);
        }

        fetchEvents();
    }, []);
    return (
        <>
            <div style={{textAlign: 'center'}}>
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </div>
            {!isLoading && fetchedEvents && <EventsList events={fetchedEvents}/>}
        </>
    );
}